import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { SessionService } from "src/session/session.service";

@Injectable()
export class TokenGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly sessionService: SessionService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    const refreshToken = request.cookies.refreshToken as string;

    if (!refreshToken) {
      return false;
    }

    try {
      const payload = (await this.jwtService.verifyAsync(refreshToken, {
        secret: process.env.JWT_REFRESH_SECRET,
      })) as unknown as JwtPayload;

      if (payload.exp > Date.now() / 1000) {
        const session = await this.sessionService.validate(refreshToken);
        if (!session) {
          return false;
        }
        request.currentUser = session.user;
      }
      return true;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return false;
    }
  }
}
