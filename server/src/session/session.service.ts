import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { User } from "src/user/entities/user.entity";
import { Session } from "./entities/session.entity";

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(Session)
    private sessionRepository: Repository<Session>,
  ) {}

  async create(user: User, refreshToken: string, ttlMs: number) {
    const session = this.sessionRepository.create({
      user,
      refreshToken,
      refreshTokenExpiresAt: new Date(Date.now() + ttlMs),
    });

    await this.sessionRepository.save(session);
  }

  async validate(refreshToken: string): Promise<Session | null> {
    const session = await this.sessionRepository.findOne({
      where: { refreshToken },
      relations: ["user"],
    });

    if (!session || session.refreshTokenExpiresAt < new Date()) {
      if (session) await this.sessionRepository.delete({ id: session.id });
      return null;
    }
    return session;
  }

  async revoke(refreshToken: string) {
    await this.sessionRepository.delete({ refreshToken });
  }

  async revokeAll(userId: string) {
    await this.sessionRepository.delete({ user: { id: userId } });
  }
}
