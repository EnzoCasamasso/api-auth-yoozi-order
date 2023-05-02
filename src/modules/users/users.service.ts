import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/Prisma.service';
import { CreateSellerDto } from 'src/modules/users/dto/create-seller.dto';
import { Prisma } from '@prisma/client';
import { Seller } from 'src/modules/users/entities/seller.entity';
import * as bcrypt from 'bcrypt';
import { AuthUser } from 'src/auth/models/AuthUser';

@Injectable()
export class UsersService {
    constructor(
        private prisma: PrismaService,
    ) { }

    async createUser(
      sellerDto: CreateSellerDto,
      currentUser: AuthUser
    ): Promise<Seller> {
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

    async findByEmail(email: string): Promise<Seller> {
      return this.prisma.seller.findUnique({ where: { email } });
    }
}
