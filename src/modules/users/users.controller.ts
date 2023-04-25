import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { Seller } from '@prisma/client';

@Controller('v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() user: Seller) {
    return this.usersService.create(user);
  }

  @Get()
  async getAllUsers() {
    return this.usersService.getAllSellers();
  }

  @Get(':id')
  async getUser(@Param('id') userId) {
    return this.usersService.getSeller(userId);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() user: any) {
    return this.usersService.updateUser(id, user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id) {
    return this.usersService.deleteUser(id);
  }
}
