import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma/Prisma.service';
import { ServicesModule } from '../services/services.module';
@Module({
  controllers: [UsersController],
  imports: [ServicesModule],
  providers: [UsersService, PrismaService],
  exports: [UsersService]
})
export class UsersModule {}
