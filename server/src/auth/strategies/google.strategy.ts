import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy, StrategyOptions } from "passport-google-oauth20";
import { ProviderType } from "../entities/auth.entity";

interface GoogleProfile extends Profile {
  id: string;
  displayName: string;
  emails: { value: string; verified: boolean }[];
  photos: { value: string }[];
  provider: "google";
}

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, "google") {
  constructor(configService: ConfigService) {
    const options: StrategyOptions = {
      clientID: configService.get<string>("OAUTH_GOOGLE_CLIENT_ID")!,
      clientSecret: configService.get<string>("OAUTH_GOOGLE_CLIENT_SECRET")!,
      callbackURL: `${configService.get<string>("API_URL")}/auth/google/callback`,
      scope: ["email", "profile"],
    };

    super(options);
  }

  validate(_accessToken: string, _refreshToken: string, profile: Profile) {
    const { id, displayName, emails, photos } = profile as GoogleProfile;
    return {
      providerAccountId: id,
      provider: ProviderType.GOOGLE,
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
