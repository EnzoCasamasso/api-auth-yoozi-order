import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductStockModule } from './productStock/productStock.module';
@Module({
  imports: [ProductStockModule],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
