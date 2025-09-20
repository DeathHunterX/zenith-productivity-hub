import { Expose } from "class-transformer";

export class AuthResponseDto {
  @Expose()
  id: string;

  @Expose()
  full_name: string;

  @Expose()
  email: string;
}
