import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy, StrategyOptions } from "passport-github2";
import { ProviderType } from "../entities/auth.entity";

interface GithubProfile extends Profile {
  id: string;
  displayName: string;
  emails: { value: string; verified: boolean }[];
  photos: { value: string }[];
  provider: "github";
}

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, "github") {
  constructor(configService: ConfigService) {
    const options: StrategyOptions = {
      clientID: configService.get<string>("OAUTH_GITHUB_CLIENT_ID")!,
      clientSecret: configService.get<string>("OAUTH_GITHUB_CLIENT_SECRET")!,
      callbackURL: `${configService.get<string>("API_URL")}/auth/github/callback`,
      scope: ["email", "user:email"],
    };

    super(options);
  }

  validate(_accessToken: string, _refreshToken: string, profile: Profile) {
    const { id, displayName, emails, photos } = profile as GithubProfile;
    return {
      providerAccountId: id,
      provider: ProviderType.GITHUB,
      full_name: displayName,
      email: emails[0].value,
      image: photos[0].value,
    };
  }

  getAuthenticationOptions() {
    return {
      session: false,
    };
  }
}
