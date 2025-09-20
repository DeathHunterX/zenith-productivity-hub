import { Injectable } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import { InjectRepository } from "@nestjs/typeorm";
import { Session } from "src/session/entities/session.entity";
import { LessThan, Repository } from "typeorm";

@Injectable()
export class SessionCleanupService {
  constructor(
    @InjectRepository(Session)
    private sessionRepository: Repository<Session>,
  ) {}

  @Cron("0 * * * *") // every hour
  async cleanupExpiredSessions() {
    await this.sessionRepository.delete({
      refreshTokenExpiresAt: LessThan(new Date()),
    });
    console.log("Expired sessions cleaned up");
  }

  // @Cron("* * * * *") // every minute
  // test() {
  //   console.log("Test cron job running at", new Date().toISOString());
  // }
}
