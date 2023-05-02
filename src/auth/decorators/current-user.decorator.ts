import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Business } from 'src/modules/business/entities/business.entity';
import { AuthRequest } from '../models/AuthRequest';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): Business => {
    const request = context.switchToHttp().getRequest<AuthRequest>();

    return request.user;
  },
);
