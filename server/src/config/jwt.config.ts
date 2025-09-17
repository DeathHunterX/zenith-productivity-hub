export const jwtConfig = {
  accessToken: {
    secret: process.env.JWT_ACCESS_SECRET,
    expiresIn: "1h",
    cookieMaxAge: 1000 * 60 * 60, // 1 hour
  },
  refreshToken: {
    secret: process.env.JWT_REFRESH_SECRET,
    expiresIn: "7d",
    cookieMaxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
  },
};
