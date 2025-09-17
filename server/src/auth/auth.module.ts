import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

// Services
import { UserService } from "src/user/user.service";
import { AuthService } from "./auth.service";

// Entities
import { User } from "src/user/entities/user.entity";
import { Account } from "./entities/auth.entity";

// Controllers
import { AuthController } from "./auth.controller";

// Modules
import { JwtModule } from "src/common/jwt/jwt.module";
import { JwtService } from "src/common/jwt/jwt.service";
import { UserModule } from "src/user/user.module";

@Module({
  imports: [TypeOrmModule.forFeature([Account, User]), UserModule, JwtModule],
  providers: [AuthService, UserService, JwtService],
  controllers: [AuthController],
})
export class AuthModule {}
