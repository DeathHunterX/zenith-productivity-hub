import { ProviderType } from "src/auth/entities/auth.entity";

interface OAuthProfileTransport {
  providerAccountId: string;
  provider: ProviderType;
  full_name: string;
  email: string;
  image: string;
}
