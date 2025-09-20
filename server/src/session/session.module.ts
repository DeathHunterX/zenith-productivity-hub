import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

// Entities
import { Session } from "./entities/session.entity";

// Services
import { SessionCleanupService } from "./cron-job/cleanup/cleanup.service";
import { SessionService } from "./session.service";

@Module({
  imports: [TypeOrmModule.forFeature([Session])],
  providers: [SessionService, SessionCleanupService],
})
export class SessionModule {}
