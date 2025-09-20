import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Res,
  UseGuards,
} from "@nestjs/common";

import { Request, Response } from "express";

// Services
import { AuthService } from "./auth.service";

// DTOs
import { User } from "src/user/entities/user.entity";
import { SignInDto } from "./dtos/sign-in.dto";
import { SignUpDto } from "./dtos/sign-up.dto";

// Decorators
import { CurrentUser } from "src/user/decorator/current-user.decorator";

// Guards
import { OAuthProfileTransport } from "src/@types";
import { AuthGuard } from "src/common/guards/auth.guard";
import { GithubAuthGuard } from "src/common/guards/oauth/github.guard";
import { GoogleAuthGuard } from "src/common/guards/oauth/google.guard";

import { Serialize } from "src/common/interceptors/serialize.interceptor";
import { AuthResponseDto } from "./dtos/auth.dto";

// Strategies

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/sign-up")
  @Serialize(AuthResponseDto)
  @HttpCode(201)
  async signUp(@Body() body: SignUpDto) {
    return await this.authService.signUp(body);
  }

  @Post("/sign-in")
  @Serialize(AuthResponseDto)
  @HttpCode(200)
  async signIn(
    @Body() body: SignInDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return await this.authService.validateCredentials(body, res);
  }

  @UseGuards(AuthGuard)
  @Post("/sign-out")
  @HttpCode(200)
  async signOut(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const refreshToken = req.cookies.refreshToken as string;
    return await this.authService.signOut(refreshToken, res);
  }

  @UseGuards(AuthGuard)
  @Post("/refresh-token")
  @HttpCode(200)
  async refreshToken(
    @CurrentUser() user: User,
    @Res({ passthrough: true }) res: Response,
  ) {
    return await this.authService.refreshToken(user.id, res);
  }

  // Google OAuth
  @Get("/google/login")
  @UseGuards(GoogleAuthGuard)
  async googleLogin() {}

  @Get("/google/callback")
  @UseGuards(GoogleAuthGuard)
  async googleCallback(
    @Req() req: Request & { user: OAuthProfileTransport },
    @Res({ passthrough: true }) res: Response,
  ) {
    return await this.authService.signInWithOAuth(req.user, res);
  }

  // Github OAuth
  @Get("/github/login")
  @UseGuards(GithubAuthGuard)
  async githubLogin() {}

  @Get("/github/callback")
  @UseGuards(GithubAuthGuard)
  async githubCallback(
    @Req() req: Request & { user: OAuthProfileTransport },
    @Res({ passthrough: true }) res: Response,
  ) {
    return await this.authService.signInWithOAuth(req.user, res);
  }
}
