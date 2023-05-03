import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/Prisma.service';
import { CreateBusinessDto } from 'src/modules/business/dto/create-business.dto';
import { Business } from 'src/modules/business/entities/business.entity';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { VerifyEmailService } from '../services/VerifyEmail.service';
@Injectable()
export class BusinessService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly verifyEmail: VerifyEmailService
  ) { }

  async create(businessDto: CreateBusinessDto): Promise<Business> {
    const emailExists = await this.verifyEmail.isEmailAlreadyRegistred(businessDto.email);

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


  findByEmail(email: string) {
    return this.prisma.business.findUnique({ where: { email } });
  }

  async getAllBusiness() {
    const business = await this.prisma.business.findMany();
    
    return business
  }
}


