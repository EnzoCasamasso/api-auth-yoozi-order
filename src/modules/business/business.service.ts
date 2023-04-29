import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/Prisma.service';
import { CreateBusinessDto } from 'src/dto/create-business.dto';
import { Business } from 'src/entities/business.entity';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
@Injectable()
export class BusinessService {
    constructor(private prisma: PrismaService) { }

    async createBusiness(businessDto: CreateBusinessDto): Promise<Business> {
      const data: Prisma.BusinessCreateInput = {
        ...businessDto,
        password: await bcrypt.hash(businessDto.password, 10),
      };
  
      const createdBusiness = await this.prisma.business.create({ data })

      return {
        ...createdBusiness,
        password: undefined
      };
    }

  async getAllBusiness() {
    const business = await this.prisma.business.findMany();
    
    return business
  }
}


