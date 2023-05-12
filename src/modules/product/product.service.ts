import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/Prisma.service';
import { Prisma } from '@prisma/client';
import { Product } from './entities/product.entity';
@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) { }

  async create(
    createProductDto: CreateProductDto,
    currentUserId: string,
  ): Promise<Product> {
    const { stock, ...productData } = createProductDto;

    return this.prisma.$transaction(async (prisma) => {
      const data: Prisma.ProductCreateInput = {
        ...productData,
        business: {
          connect: {id: currentUserId}
        }
      }

      const product = await prisma.product.create({ data });

      if (stock) {

        const stockInput: Prisma.ProductStockCreateInput = {
          productId: product.id,
          currentInventory: stock.currentInventory,
          unityMeasurement: stock.unityMeasurement  
        }

        const stockData = await prisma.productStock.create({
          data: {
            ...stockInput,
            product: {
              connect: { id: product.id },
            },
          }
        });

        return {
          ...product,
          productStockId: stockData.id,
          ...stockData
        }
      }

    return { ...product };

    });
  }

  findAll(): Promise<Product[]> {
    return this.prisma.product.findMany();
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
