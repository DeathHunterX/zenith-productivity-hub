import { IsEnum, IsString } from "class-validator";
import { ProviderType } from "../entities/auth.entity";

export class OAuthProfileDto {
  @IsString()
  providerAccountId: string;

  @IsString()
  full_name: string;

  @IsString()
  email: string;

  @IsString()
  image: string;

  @IsEnum(ProviderType)
  provider: ProviderType;
}
