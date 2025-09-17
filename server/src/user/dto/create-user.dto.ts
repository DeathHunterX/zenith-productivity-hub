import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  full_name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  city: string;

  @IsString()
  country: string;
}
