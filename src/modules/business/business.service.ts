import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/Prisma.service';
import { BusinessDto } from 'src/dto/business.dto';
import { SellerDto } from 'src/dto/seller.dto';
import { Business } from 'src/interfaces/business';
import { Seller } from 'src/interfaces/seller';
@Injectable()
export class BusinessService {
    constructor(private readonly prisma: PrismaService) { }

    async createBusiness(
      businessDto: BusinessDto,
      sellerDto: SellerDto[],
    ): Promise<Business> {
      const { id, businessName } = businessDto;
      const sellers: Seller[] = sellerDto.map((seller) => ({
        ...seller,
        userName: seller.userName,
        email: seller.email,
        business: businessDto,
        businessName: businessName,
        businessId: id,
        clients: [],
      }))
      return {
        ...businessDto,
        sellers
    }
  }

}


