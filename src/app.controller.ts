import { Controller, Get } from '@nestjs/common';
import { CurrentUser } from './auth/decorators/current-user.decorator';
import { Business } from './entities/business.entity';

@Controller()
export class AppController {
  constructor() {}

  @Get('/me')
  getMe(@CurrentUser() currentUser: Business) {
    return currentUser;
  }
}