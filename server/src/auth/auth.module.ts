import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

// Services
import { JwtService } from "src/common/jwt/jwt.service";
import { SessionService } from "src/session/session.service";
import { UserService } from "src/user/user.service";
import { AuthService } from "./auth.service";

// Entities
import { User } from "src/user/entities/user.entity";
import { Account } from "./entities/auth.entity";

// Controllers
import { AuthController } from "./auth.controller";

// Modules
import { JwtModule } from "src/common/jwt/jwt.module";
import { UserModule } from "src/user/user.module";

// Strategies
import { Session } from "src/session/entities/session.entity";
import { GithubStrategy } from "./strategies/github.strategy";
import { GoogleStrategy } from "./strategies/google.strategy";

@Module({
  imports: [
    TypeOrmModule.forFeature([Account, User, Session]),
    UserModule,
    JwtModule,
  ],
  providers: [
    AuthService,
    UserService,
    JwtService,
    SessionService,
    GoogleStrategy,
    GithubStrategy,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
