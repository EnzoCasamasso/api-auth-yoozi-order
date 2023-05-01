import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/Prisma.service';
import { CreateSellerDto } from 'src/dto/create-seller.dto';
import { Prisma } from '@prisma/client';
import { Seller } from 'src/entities/seller.entity';
import * as bcrypt from 'bcrypt';
import { LoggedUser } from 'src/auth/models/LoggedUser';

@Injectable()
export class UsersService {
    constructor(
        private prisma: PrismaService,
    ) { }

    async createUser(
      sellerDto: CreateSellerDto,
      currentUser: LoggedUser
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
}
