import { Inject, Injectable } from "@nestjs/common";
import { JwtService as NestJwtService } from "@nestjs/jwt";

@Injectable()
export class JwtService {
  constructor(
    @Inject("ACCESS_TOKEN_SECRET")
    private accessTokenSecret: NestJwtService,
    @Inject("REFRESH_TOKEN_SECRET")
    private refreshTokenSecret: NestJwtService,
  ) {}

  async signAccessToken(payload: object) {
    return this.accessTokenSecret.signAsync(payload);
  }

  async signRefreshToken(payload: object) {
    return this.refreshTokenSecret.signAsync(payload);
  }
}
