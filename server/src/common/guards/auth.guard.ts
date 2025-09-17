import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { User } from "src/user/entities/user.entity";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    const accessToken = request.cookies.accessToken as string;

    if (!accessToken) {
      return false;
    }

    try {
      const payload = (await this.jwtService.verifyAsync(accessToken, {
        secret: process.env.JWT_ACCESS_SECRET,
      })) as unknown as JwtPayload;

      if (payload.exp > Date.now() / 1000) {
        request.currentUser = Object.assign({ id: payload.userId }) as User;
        return true;
      } else {
        return false;
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return false;
    }
  }
}
