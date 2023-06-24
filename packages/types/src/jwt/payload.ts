import { JwtPayload } from "jsonwebtoken";

export type JWTPayload = JwtPayload & {
  userID: string;
};
