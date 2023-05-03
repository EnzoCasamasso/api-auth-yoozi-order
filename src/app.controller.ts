import { Controller, Get } from '@nestjs/common';
import { CurrentUser } from './auth/decorators/current-user.decorator';
import { AppService } from './app.service';
import { AuthUser } from './auth/models/AuthUser';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  works() {
    return this.appService.getWorks();
  }

  @Get('/me')
  async getMe(@CurrentUser() currentUser: AuthUser): Promise<AuthUser> {
    return {
      ...currentUser,
      password: undefined
    }
  }
}