import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/Prisma.service';
import { CreateSellerDto } from 'src/modules/users/dto/create-seller.dto';
import { Prisma } from '@prisma/client';
import { Seller } from 'src/modules/users/entities/seller.entity';
import * as bcrypt from 'bcrypt';
import { VerifyEmailService } from '../services/VerifyEmail.service';
import { User } from 'src/auth/models/User';

@Injectable()
export class UsersService {
    constructor(
        private prisma: PrismaService,
        private readonly verifyEmail: VerifyEmailService
    ) { }

    async createUser(
      sellerDto: CreateSellerDto,
      currentUser: User
    ): Promise<Seller> {
      const emailExists = await this.verifyEmail.isEmailAlreadyRegistred(sellerDto.email);

      if (emailExists) {
          throw new HttpException('Email already exists', HttpStatus.CONFLICT);
      }

        const data: Prisma.SellerCreateInput = {
          ...sellerDto,
          password: await bcrypt.hash(sellerDto.password, 10),
          business: {
            connect: { id: currentUser.id }
          }
        }
          const user = await this.prisma.seller.create({ data })
      
          return {
            ...user,
            password: undefined
          }
    }

    async isEmailAlredyRegistred(email: string): Promise<boolean> {
      const seller = await this.prisma.seller.findUnique({
        where: { email }
      })
  
      if (seller?.email) {
        return true;
      } 
      return false;     
    }

    async findByEmail(email: string): Promise<Seller> {
      return this.prisma.seller.findUnique({ where: { email } });
    }
}
