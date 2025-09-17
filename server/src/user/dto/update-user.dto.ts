import { IsNotEmpty, IsString } from "class-validator";

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  full_name: string;

  @IsString()
  city: string;

  @IsString()
  country: string;
}
