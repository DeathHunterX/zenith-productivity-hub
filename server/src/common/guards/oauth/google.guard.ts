import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class GoogleAuthGuard extends AuthGuard("google") {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const activate = (await super.canActivate(context)) as boolean;

    /*
     * Notes: Due to the way passport-google-oauth20 works, we can't use the logIn method to create a login session.
     * This is because passport-google-oauth20 uses the session to store the user's information, and we don't want to use the session.
     * So we need to return the activate value directly.
     */

    // const request = context.switchToHttp().getRequest<Request>();
    // await super.logIn(request);
    return activate;
  }
  getAuthenticationOptions() {
    return {
      session: false,
    };
  }
}
