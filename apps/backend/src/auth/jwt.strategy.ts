import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { backendConfig } from 'config';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JWTPayload } from 'types';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: backendConfig.jwt.accessToken.secret,
    });
  }

  async validate(payload: JWTPayload): Promise<JWTPayload> {
    return payload;
  }
}
