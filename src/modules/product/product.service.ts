import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/Prisma.service';
import { Prisma } from '@prisma/client';
import { User } from 'src/auth/models/User';
import { Product } from './entities/product.entity';
import { ProductStockService } from './productStock/productStock.service';
@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService, private productStock: ProductStockService) { }

  async create(createProductDto: CreateProductDto, currentUser: User): Promise<Product> {
    const { id, stockDto } = createProductDto;
    const productStock = await this.productStock.createStock(stockDto,id)

    const data: Prisma.ProductCreateInput = {
      ...createProductDto,
      created_at: new Date(Date.now()),
      business: {
        connect: {id: currentUser.id}
      },
      productStock: {
        create: {
          ...productStock,
          previousWeight: stockDto.previusWeight
        }
      }
    }

    const product = await this.prisma.product.create({ data })

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
