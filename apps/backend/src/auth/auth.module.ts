import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { JwtRefreshTokenStrategy } from './jwt-refresh.strategy';

@Module({
  imports: [PassportModule, JwtModule.register({})],
  providers: [AuthService, JwtStrategy, JwtRefreshTokenStrategy],
})
export class AuthModule {}
