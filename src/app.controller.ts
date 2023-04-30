import { Controller, Get } from '@nestjs/common';
import { CurrentUser } from './auth/decorators/current-user.decorator';
import { Business } from './entities/business.entity';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  works() {
    return this.appService.getWorks();
  }

  @Get('/me')
  getMe(@CurrentUser() currentUser: Business) {
    return currentUser;
  }
}