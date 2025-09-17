import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService, JwtModule as NestJwtModule } from "@nestjs/jwt";

// Config
import { jwtConfig } from "src/config/jwt.config";

@Module({
  imports: [NestJwtModule.register({})],
  providers: [
    JwtService,
    {
      provide: "ACCESS_TOKEN_SECRET",
      useFactory: (configService: ConfigService) => {
        return new JwtService({
          secret: configService.get<string>("JWT_ACCESS_SECRET"),
          signOptions: { expiresIn: jwtConfig.accessToken.expiresIn },
        });
      },

      inject: [ConfigService],
    },
    {
      provide: "REFRESH_TOKEN_SECRET",
      useFactory: (configService: ConfigService) => {
        return new JwtService({
          secret: configService.get<string>("JWT_REFRESH_SECRET"),
          signOptions: { expiresIn: jwtConfig.refreshToken.expiresIn },
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: [JwtService, "ACCESS_TOKEN_SECRET", "REFRESH_TOKEN_SECRET"],
})
export class JwtModule {}
