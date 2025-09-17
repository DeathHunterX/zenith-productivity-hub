import { Body, Controller, Get, Param, Patch, UseGuards } from "@nestjs/common";

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

  @Patch("/:userId")
  async updateUser(
    @Param("userId") userId: string,
    @Body() body: UpdateUserDto,
  ) {
    return this.userService.update(userId, body);
  }

  @Get("/me")
  @Serialize(UserDto)
  getMe(@CurrentUser() user: User) {
    const { id } = user;
    console.log(id);
    return this.userService.findMe(user.id);
  }

  @Get("/:userId")
  async findUserById(@Param("userId") userId: string) {
    return this.userService.findById(userId);
  }
}
