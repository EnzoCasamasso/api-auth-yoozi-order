import { Controller, Get } from '@nestjs/common';
import { CurrentUser } from './auth/decorators/current-user.decorator';
import { AppService } from './app.service';
import { User } from './auth/models/User';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  works() {
    return this.appService.getWorks();
  }

  @Get('/me')
  async getMe(@CurrentUser() currentUser: User): Promise<User> {
    return {...currentUser}
  }
}