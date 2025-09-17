import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

// Entities
import { User } from "./entities/user.entity";

// DTOs
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(body: CreateUserDto) {
    const user = this.userRepository.create(body);

    await this.userRepository.save(user);

    return user;
  }

  async update(userId: string, body: UpdateUserDto) {
    const user = await this.findById(userId);

    if (!user) {
      throw new NotFoundException("User not found");
    }

    Object.assign(user, body);
    return this.userRepository.save(user);
  }

  async findById(userId: string) {
    return this.userRepository.findOne({ where: { id: userId } });
  }

  async findMe(userId: string) {
    return this.userRepository
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.accounts", "account")
      .where("user.id = :id", { id: userId })
      .getOne();
  }

  async findByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  async remove(userId: string) {
    const user = await this.findById(userId);

    if (!user) {
      throw new NotFoundException("User not found");
    }

    return this.userRepository.delete(userId);
  }
}
