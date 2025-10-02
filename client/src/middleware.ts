import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// const publicRoutes = ["/"];
const authRoutes = ["/sign-in", "/sign-up"];
const privateRoutes = ["/dashboard"];

export default async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isAuthRoute = authRoutes.includes(path);
  const isPrivateRoute = privateRoutes.includes(path);

  // Lightweight auth signal: presence of access or refresh token cookie
  // If only refresh token exists, allow route; axios interceptor will refresh on first API call
  const accessTokenCookie = (await cookies()).get("accessToken");
  const refreshTokenCookie = (await cookies()).get("refreshToken");

  // If visiting a private route without any token, redirect to sign-in
  if (isPrivateRoute && !accessTokenCookie && !refreshTokenCookie) {
    const signInUrl = new URL("/sign-in", request.url);
    signInUrl.searchParams.set("callbackUrl", path);
    return NextResponse.redirect(signInUrl);
  }

  // If visiting a public auth route while already authenticated, go to dashboard
  if (isAuthRoute && (accessTokenCookie || refreshTokenCookie)) {
    const dashboardUrl = new URL("/dashboard", request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
