import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

// Entities
import { User } from "./entities/user.entity";

// Controllers
import { UserController } from "./user.controller";

// Services
import { JwtService } from "@nestjs/jwt";
import { Account } from "src/auth/entities/auth.entity";
import { AuthGuard } from "src/common/guards/auth.guard";
import { UserService } from "./user.service";

@Module({
  imports: [TypeOrmModule.forFeature([User, Account])],
  controllers: [UserController],
  providers: [UserService, JwtService, AuthGuard],
  exports: [UserService],
})
export class UserModule {}
