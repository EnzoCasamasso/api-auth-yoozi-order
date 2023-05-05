import { Injectable } from "@nestjs/common";
import { Prisma } from '@prisma/client';
import { PrismaService } from "src/prisma/Prisma.service";
import { ProductStock } from "../entities/productStock.entity";
import { CreateProductStockDto } from "../dto/create-productStock.dto";

@Injectable()
export class ProductStockService {
    constructor(private readonly prisma: PrismaService) { }

    async createStock(
        stockDto: CreateProductStockDto,
        productId: string
      ): Promise<ProductStock> {
        const { unityMeasurement }= stockDto;
        const data: Prisma.ProductStockCreateInput = {
          ...stockDto,
          productId: productId,
          product: {
            connect: { id: productId }
          }
        };
    
        const createdProductStock = await this.prisma.productStock.create({ data })
    
        return {
          ...createdProductStock,
          id: createdProductStock.id,
          unityMeasurement,
          productId: createdProductStock.productId,
          currentInventory: createdProductStock.currentInventory,
          previousStock: createdProductStock.previousStock
        };
     }
}