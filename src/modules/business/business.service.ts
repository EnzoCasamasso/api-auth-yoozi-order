import { Seller } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PrismaService } from 'src/database/Prisma.service';
import { BusinessDto } from 'src/dto/business.dto';
import { SellerDto } from 'src/dto/seller.dto';
import { Business } from 'src/interfaces/business';
@Injectable()
export class BusinessService {
    constructor(private prisma: PrismaService) { }

    async createBusiness(businessDto: BusinessDto): Promise<Business> {
      const { businessName, email, sellers } = businessDto;
  
      const business = await this.prisma.business.create({
        data: {
          id: randomUUID(),
          businessName: businessName,
          email: email,
          sellers: {
            create: {
              id: randomUUID(),
              businessName: businessName,
              email: sellers[0].email,
            }
          }
        }
      })

      return business;
    }

  async getAllBusiness() {
    const business = await this.prisma.business.findMany();
    
    return business
  }
}


