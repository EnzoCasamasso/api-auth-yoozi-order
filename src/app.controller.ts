import { Controller, Get } from '@nestjs/common';
import { CurrentUser } from './auth/decorators/current-user.decorator';
import { AppService } from './app.service';
import { CurrentUserLogged } from './auth/models/CurrentUserLogged';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  works() {
    return this.appService.getWorks();
  }

  @Get('/me')
  getMe(@CurrentUser() currentUser: CurrentUserLogged) {
    return currentUser;
  }
}