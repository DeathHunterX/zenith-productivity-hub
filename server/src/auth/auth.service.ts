import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Response } from "express";
import { DataSource, EntityManager, Repository } from "typeorm";

// Utils
import * as bcrypt from "bcrypt";

// Entities
import { User } from "src/user/entities/user.entity";

// Services
import { JwtService } from "src/common/jwt/jwt.service";
import { UserService } from "src/user/user.service";

// DTOs
import { OAuthProfileDto } from "./dtos/oauth-profile.dto";
import { SignInDto } from "./dtos/sign-in.dto";
import { SignUpDto } from "./dtos/sign-up.dto";

// Entities
import { ConfigService } from "@nestjs/config";
import { jwtConfig } from "src/config/jwt.config";
import { SessionService } from "src/session/session.service";
import { Account, AccountType, ProviderType } from "./entities/auth.entity";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,

    private userService: UserService,
    private jwtService: JwtService,
    private sessionService: SessionService,

    private dataSource: DataSource,

    private configService: ConfigService,
  ) {}

  async signUp(body: SignUpDto) {
    const { full_name, email, password } = body;

    const existingUser = await this.userService.findWithAccounts({ email });

    if (!existingUser) {
      return this.runInTransaction(async (manager) => {
        const userRepo = manager.getRepository(User);
        const accountRepo = manager.getRepository(Account);

        const user = userRepo.create({
          email,
          full_name,
        });
        await userRepo.save(user);

        const hashedPassword = await bcrypt.hash(password, 10);
        const account = accountRepo.create({
          user,
          providerAccountId: email,
          passwordHash: hashedPassword,
          provider: ProviderType.CREDENTIALS,
          accountType: AccountType.PERSONAL,
        });
        await accountRepo.save(account);

        return {
          message: "User created successfully",
          data: user,
        };
      });
    }

    // User exists
    const hasCredential = existingUser.accounts.find(
      (account) => account.provider === ProviderType.CREDENTIALS,
    );

    if (hasCredential) {
      throw new BadRequestException("User already exists with credentials");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const account = this.accountRepository.create({
      user: existingUser,
      providerAccountId: email,
      passwordHash: hashedPassword,
      provider: ProviderType.CREDENTIALS,
      accountType: AccountType.PERSONAL,
    });

    await this.accountRepository.save(account);

    return {
      message: "Credentials account added to existing user",
      data: existingUser,
    };
  }

  async validateCredentials(body: SignInDto, res: Response) {
    const { email, password } = body;

    const user = await this.userService.findWithAccounts({ email });

    if (!user) {
      throw new BadRequestException("User not found");
    }

    const accountByCredential = user.accounts.find(
      (account) => account.provider === ProviderType.CREDENTIALS,
    );

    if (!accountByCredential) {
      throw new BadRequestException(
        "This account does not support credentials login",
      );
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      accountByCredential.passwordHash,
    );

    if (!isPasswordValid) {
      throw new BadRequestException("Invalid password");
    }

    // Issue tokens
    await this.issueTokens(user, accountByCredential, res);

    // Return user
    return { message: "Signed in successfully", data: user };
  }

  async signOut(refreshToken: string, res: Response) {
    if (refreshToken) {
      await this.sessionService.revoke(refreshToken);
    }

    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");

    return { message: "Signed out successfully" };
  }

  async refreshToken(userId: string, res: Response) {
    const user = await this.userService.findWithAccounts({
      userId,
    });

    if (!user) {
      throw new BadRequestException("User not found");
    }

    const accessTokenMaxAge = jwtConfig.accessToken.cookieMaxAge;

    const accessToken = await this.jwtService.signAccessToken({
      userId: user.id,
    });

    // Store tokens in cookies
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: this.configService.get("NODE_ENV") === "production",
      maxAge: accessTokenMaxAge,
    });

    return { message: "Token refreshed successfully" };
  }

  async signInWithOAuth(body: OAuthProfileDto, res: Response) {
    const { providerAccountId, provider, full_name, email, image } = body;

    let existingUser: User | null = await this.userService.findByEmail(email);
    let existingAccount: Account | null = null;

    if (!existingUser) {
      // User does not exist → create both user and account in a transaction
      const result = await this.runInTransaction(async (manager) => {
        const userRepo = manager.getRepository(User);
        const accountRepo = manager.getRepository(Account);

        const newUser = userRepo.create({ email, full_name, image });
        await userRepo.save(newUser);

        const newAccount = accountRepo.create({
          user: newUser,
          provider,
          providerAccountId,
          accountType: AccountType.PERSONAL,
        });
        await accountRepo.save(newAccount);

        return { user: newUser, account: newAccount };
      });

      existingUser = result.user;
      existingAccount = result.account;
    } else {
      // User exists → check if account already linked
      const checkedAccount = await this.accountRepository.findOne({
        where: { provider, providerAccountId },
      });

      if (!checkedAccount) {
        try {
          const newAccount = this.accountRepository.create({
            user: existingUser,
            provider,
            providerAccountId,
            accountType: AccountType.PERSONAL,
          });
          await this.accountRepository.save(newAccount);
          existingAccount = newAccount;
        } catch (err) {
          // Handle possible race (unique constraint on provider+providerAccountId)
          const maybeExisting = await this.accountRepository.findOneOrFail({
            where: { provider, providerAccountId },
          });
          if (maybeExisting) {
            existingAccount = maybeExisting;
          } else {
            throw err;
          }
        }
      } else {
        existingAccount = checkedAccount; // ✅ assign when account already exists
      }
    }
    // Issue tokens
    await this.issueTokens(existingUser, existingAccount, res);

    // return user
    return {
      message: `${provider.charAt(0).toUpperCase() + provider.slice(1)} callback successful`,
      data: existingUser,
    };
  }

  private async issueTokens(user: User, account: Account, res: Response) {
    // Set expires at
    const accessTokenMaxAge = jwtConfig.accessToken.cookieMaxAge;
    const refreshTokenMaxAge = jwtConfig.refreshToken.cookieMaxAge;

    // Generate access and refresh tokens
    const accessToken = await this.jwtService.signAccessToken({
      userId: user.id,
    });
    const refreshToken = await this.jwtService.signRefreshToken({
      userId: user.id,
    });

    // Save tokens in the database
    await this.sessionService.create(user, refreshToken, refreshTokenMaxAge);

    // Store tokens in cookies
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: this.configService.get("NODE_ENV") === "production",
      maxAge: accessTokenMaxAge,
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: this.configService.get("NODE_ENV") === "production",
      maxAge: refreshTokenMaxAge,
    });
  }

  private async runInTransaction<T>(
    worker: (manager: EntityManager) => Promise<T>,
  ): Promise<T> {
    return this.dataSource.transaction(worker);
  }
}
