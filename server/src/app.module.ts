import { Module, ValidationPipe } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { APP_INTERCEPTOR, APP_PIPE } from "@nestjs/core";
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";

// Modules
import { ScheduleModule } from "@nestjs/schedule";
import { AuthModule } from "./auth/auth.module";
import { JwtModule } from "./common/jwt/jwt.module";
import { SessionModule } from "./session/session.module";
import { UserModule } from "./user/user.module";

// Interceptors
import { TransformInterceptor } from "./common/interceptors/transform.interceptor";

@Module({
  imports: [
    //  Configuration Module
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),

    //  TypeORM Module
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: configService.get<string>(
          "DATABASE_TYPE",
        ) as TypeOrmModuleOptions["type"],
        url: configService.get<string>("DATABASE_URL"),
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),

    //  Schedule Module
    ScheduleModule.forRoot(),

    //  Modules
    AuthModule,
    UserModule,
    JwtModule,
    SessionModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
      }),
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
})
export class AppModule {}
