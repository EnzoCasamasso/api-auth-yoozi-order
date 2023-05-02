import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateSellerDto } from 'src/modules/users/dto/create-seller.dto';
import { Seller } from 'src/modules/users/entities/seller.entity';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { AuthUser } from 'src/auth/models/AuthUser';
@Controller('v1/user')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
  ) { }

  @Post()
  async createUser(
    @Body() userDto: CreateSellerDto,
    @CurrentUser() currentUser: AuthUser
  ): Promise<Seller> {
    const createdUser = this.userService.createUser(userDto, currentUser);
    return createdUser;
  } 
}
