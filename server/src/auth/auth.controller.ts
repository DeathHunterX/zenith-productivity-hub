import { Body, Controller, Post, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";

// Services
import { AuthService } from "./auth.service";

// DTOs
import { User } from "src/user/entities/user.entity";
import { SignInDto } from "./dtos/sign-in.dto";
import { SignUpDto } from "./dtos/sign-up.dto";

// Decorators
import { CurrentUser } from "src/user/decorator/current-user.decorator";

// Guards
import { AuthGuard } from "src/common/guards/auth.guard";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/sign-up")
  async signUp(@Body() body: SignUpDto) {
    return await this.authService.signUp(body);
  }

  @Post("/sign-in")
  async signIn(
    @Body() body: SignInDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return await this.authService.validateCredentials(body, res);
  }

  @UseGuards(AuthGuard)
  @Post("/sign-out")
  async signOut(
    @CurrentUser() user: User,
    @Res({ passthrough: true }) res: Response,
  ) {
    return await this.authService.signOut(user.id, res);
  }

  @UseGuards(AuthGuard)
  @Post("/refresh-token")
  async refreshToken(
    @CurrentUser() user: User,
    @Res({ passthrough: true }) res: Response,
  ) {
    return await this.authService.refreshToken(user.id, res);
  }
}
