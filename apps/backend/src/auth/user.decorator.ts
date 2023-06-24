import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JWTPayload } from 'types';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): JWTPayload => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
