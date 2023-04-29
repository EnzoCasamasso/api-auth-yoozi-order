import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PrismaService } from 'src/database/Prisma.service';
import { BusinessDto } from 'src/dto/business.dto';
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
        }
      })

      return business;
    }

  async getAllBusiness() {
    const business = await this.prisma.business.findMany();
    
    return business
  }
}


