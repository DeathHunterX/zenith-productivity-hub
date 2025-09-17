import { Expose, Type } from "class-transformer";
import { AccountDto } from "src/auth/dtos/account.dto";

export class UserDto {
  @Expose()
  id: string;

  @Expose()
  full_name: string;

  @Expose()
  email: string;

  @Expose()
  city: string;

  @Expose()
  country: string;

  @Expose()
  @Type(() => AccountDto)
  accounts: AccountDto[];
}
