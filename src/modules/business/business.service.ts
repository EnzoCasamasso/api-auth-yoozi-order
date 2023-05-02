import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/Prisma.service';
import { CreateBusinessDto } from 'src/modules/business/dto/create-business.dto';
import { Business } from 'src/modules/business/entities/business.entity';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
@Injectable()
export class BusinessService {
  constructor(private readonly prisma: PrismaService) { }

  async create(businessDto: CreateBusinessDto): Promise<Business> {
    const emailExists = await this.emailExists(businessDto.email);

    if (emailExists) {
        throw new HttpException('Email already exists', HttpStatus.CONFLICT);
    }

    const data: Prisma.BusinessCreateInput = {
        ...businessDto,
        password: await bcrypt.hash(businessDto.password, 10),
    };

    const createdBusiness = await this.prisma.business.create({ data });

    return {
        ...createdBusiness,
        password: undefined,
    };
}

  async emailExists(email: string): Promise<boolean> {
    const business = await this.prisma.business.findUnique({
      where: { email }
    })

    if (business?.email) {
      return true;
    } 
    return false;     
  }

  findByEmail(email: string) {
    return this.prisma.business.findUnique({ where: { email } });
  }

  async getAllBusiness() {
    const business = await this.prisma.business.findMany();
    
    return business
  }
}


