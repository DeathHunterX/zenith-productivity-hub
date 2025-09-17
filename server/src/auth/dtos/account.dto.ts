import { Expose } from "class-transformer";
import { AccountType, ProviderType } from "../entities/auth.entity";

export class AccountDto {
  @Expose()
  id: string;

  @Expose()
  provider: ProviderType;

  @Expose()
  accountType: AccountType;
}
