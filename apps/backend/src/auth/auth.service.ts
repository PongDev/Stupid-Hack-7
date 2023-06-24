import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { backendConfig } from 'config';
import { JWTPayload, JWTToken } from 'types';

@Injectable()
export class AuthService {
  private readonly jwtAccessTokenOptions = {
    secret: backendConfig.jwt.accessToken.secret,
    expiresIn: backendConfig.jwt.accessToken.expire,
  };
  private readonly jwtRefreshTokenOptions = {
    secret: backendConfig.jwt.refreshToken.secret,
    expiresIn: backendConfig.jwt.refreshToken.expire,
  };

  constructor(private jwtService: JwtService) {}

  signAccessToken(payload: JWTPayload): string {
    return this.jwtService.sign(payload, this.jwtAccessTokenOptions);
  }

  async signAccessTokenAsync(payload: JWTPayload): Promise<string> {
    return await this.jwtService.signAsync(payload, this.jwtAccessTokenOptions);
  }

  signRefreshToken(payload: JWTPayload): string {
    return this.jwtService.sign(payload, this.jwtRefreshTokenOptions);
  }

  async signRefreshTokenAsync(payload: JWTPayload): Promise<string> {
    return await this.jwtService.signAsync(
      payload,
      this.jwtRefreshTokenOptions,
    );
  }

  async generateToken(jwtPayload: JWTPayload): Promise<JWTToken> {
    const accessToken = this.signAccessTokenAsync(jwtPayload);
    const refreshToken = this.signRefreshTokenAsync(jwtPayload);

    return {
      accessToken: await accessToken,
      refreshToken: await refreshToken,
    };
  }
}
