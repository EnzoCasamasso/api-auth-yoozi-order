import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/Prisma.service';
import { Prisma } from '@prisma/client';
import { User } from 'src/auth/models/User';
import { Product } from './entities/product.entity';
import { ProductStockService } from './productStock/productStock.service';
import { UnauthorizedError } from 'src/auth/errors/unauthorized.error';
@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService, private productStock: ProductStockService) { }

  async create(
    createProductDto: CreateProductDto,
    currentUserId: string
  ): Promise<Product> {
    if(!currentUserId) throw new UnauthorizedError("cannot access")

    const data: Prisma.ProductCreateInput = {
      ...createProductDto,
      created_at: new Date(Date.now()),
      business: {
        connect: { id: currentUserId },
      }
    };
    const product = await this.prisma.product.create({ data }); 
    
    return {
      ...product,
    }
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
