import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductStockService } from './productStock/productStock.service';
import { PrismaService } from 'src/prisma/Prisma.service';
@Module({
  controllers: [ProductController],
  providers: [ProductService, ProductStockService, PrismaService]
})
export class ProductModule {}
