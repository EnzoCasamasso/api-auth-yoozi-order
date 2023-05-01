import { Prisma } from '@prisma/client';
import { Controller, Post, Body, Get} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateSellerDto } from 'src/dto/create-seller.dto';
import { Seller } from 'src/entities/seller.entity';
import { PrismaService } from 'src/prisma/Prisma.service';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { AppService } from 'src/app.service';

@Controller('v1/user')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
  ) {}

  @Post()
  async createUser(@Body() userDto: CreateSellerDto): Promise<Seller> {
    const createdUser = this.userService.createUser(userDto)
    return createdUser;
  }
}
