import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateSellerDto } from 'src/dto/create-seller.dto';
import { Seller } from 'src/entities/seller.entity';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { Business } from 'src/entities/business.entity';


@Controller('v1/user')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
  ) {}

  @Post()
  async createUser(
    @Body() userDto: CreateSellerDto,
    @CurrentUser() currentUser: Business
  ): Promise<Seller> {
    const createdUser = this.userService.createUser(userDto, currentUser)
    return createdUser;
  }
}
