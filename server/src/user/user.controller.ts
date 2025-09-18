import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Patch,
  UseGuards,
} from "@nestjs/common";

// Services
import { UserService } from "./user.service";

// Guards
import { AuthGuard } from "src/common/guards/auth.guard";

// DTOs
import { CurrentUser } from "./decorator/current-user.decorator";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserDto } from "./dto/user.dto";

// Entities
import { Serialize } from "src/common/interceptors/serialize.interceptor";
import { User } from "./entities/user.entity";

@UseGuards(AuthGuard)
@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Patch("/me")
  @HttpCode(200)
  async updateUser(@Body() body: UpdateUserDto, @CurrentUser() user: User) {
    return this.userService.update(user.id, body);
  }

  @Get("/me")
  @HttpCode(200)
  @Serialize(UserDto)
  getMe(@CurrentUser() user: User) {
    return this.userService.findMe(user.id);
  }

  @Get("/:userId")
  @HttpCode(200)
  async findUserById(@Param("userId") userId: string) {
    return this.userService.findById(userId);
  }
}
