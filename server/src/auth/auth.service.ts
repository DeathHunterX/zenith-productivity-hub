import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Response } from "express";
import { DataSource, Repository } from "typeorm";

// Utils
import * as bcrypt from "bcrypt";

// Entities
import { User } from "src/user/entities/user.entity";

// Services
import { JwtService } from "src/common/jwt/jwt.service";
import { UserService } from "src/user/user.service";

// DTOs
import { SignInDto } from "./dtos/sign-in.dto";
import { SignUpDto } from "./dtos/sign-up.dto";

// Entities
import { jwtConfig } from "src/config/jwt.config";
import { Account, AccountType, ProviderType } from "./entities/auth.entity";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,

    private userService: UserService,
    private dataSource: DataSource,
    private jwtService: JwtService,
  ) {}

  async signUp(body: SignUpDto) {
    const { full_name, email, password } = body;
    const existingUser = await this.userService.findByEmail(email);

    if (existingUser) {
      throw new BadRequestException("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();

    // Transaction
    await queryRunner.startTransaction();
    try {
      const user = queryRunner.manager.getRepository(User).create({
        email,
        full_name,
        city: "",
        country: "",
      });

      await queryRunner.manager.getRepository(User).save(user);

      const account = queryRunner.manager.getRepository(Account).create({
        user,
        providerAccountId: email,
        passwordHash: hashedPassword,
        provider: ProviderType.CREDENTIALS,
        accountType: AccountType.PERSONAL,
      });

      await queryRunner.manager.getRepository(Account).save(account);

      await queryRunner.commitTransaction();

      return { message: "User created successfully", data: user };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  async validateCredentials(body: SignInDto, res: Response) {
    const { email, password } = body;

    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new BadRequestException("User not found");
    }

    const account = await this.accountRepository.findOne({ where: { user } });

    if (!account) {
      throw new BadRequestException("Account not found");
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      account.passwordHash,
    );

    if (!isPasswordValid) {
      throw new BadRequestException("Invalid password");
    }

    // Set expires at
    const accessTokenMaxAge = jwtConfig.accessToken.cookieMaxAge;
    const refreshTokenMaxAge = jwtConfig.refreshToken.cookieMaxAge;

    const accessTokenExpiresAt = new Date(Date.now() + accessTokenMaxAge);
    const refreshTokenExpiresAt = new Date(Date.now() + refreshTokenMaxAge);

    // Generate access and refresh tokens
    const accessToken = await this.jwtService.signAccessToken({
      userId: user.id,
    });
    const refreshToken = await this.jwtService.signRefreshToken({
      userId: user.id,
    });

    // Save tokens in the database
    Object.assign(account, {
      accessToken,
      refreshToken,
      accessTokenExpiresAt,
      refreshTokenExpiresAt,
    });

    await this.accountRepository.save(account);

    // Store tokens in cookies
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: accessTokenMaxAge,
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: refreshTokenMaxAge,
    });

    // Return user
    return { message: "Signed in successfully", data: user };
  }

  async signOut(userId: string, res: Response) {
    await this.accountRepository.update({ user: { id: userId } }, {
      accessToken: null,
      refreshToken: null,
      accessTokenExpiresAt: null,
      refreshTokenExpiresAt: null,
    } as unknown as Account);

    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");

    return { message: "Signed out successfully" };
  }

  async refreshToken(userId: string, res: Response) {
    const user = await this.userService.findMe(userId);

    if (!user) {
      throw new BadRequestException("User not found");
    }

    const accessTokenMaxAge = jwtConfig.accessToken.cookieMaxAge;

    const accessTokenExpiresAt = new Date(Date.now() + accessTokenMaxAge);

    const accessToken = await this.jwtService.signAccessToken({
      userId: user.id,
    });

    await this.accountRepository.update(
      { user: { id: userId } },
      { accessToken, accessTokenExpiresAt },
    );

    // Store tokens in cookies
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: accessTokenMaxAge,
    });

    return { message: "Token refreshed successfully" };
  }
}
