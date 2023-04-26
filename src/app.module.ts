import { Module } from '@nestjs/common';

import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { BusinessModule } from './modules/business/business.module';
@Module({
  imports: [
    UsersModule,
    ProductsModule,
    BusinessModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
