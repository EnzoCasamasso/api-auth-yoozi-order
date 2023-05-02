import { Module } from '@nestjs/common';
import { BusinessModule } from '../business/business.module';
import { UsersModule } from '../users/users.module';
import { ClientModule } from '../client/client.module';
import { ProductModule } from '../product/product.module';
import { OrderModule } from '../order/order.module';

@Module({
    imports: [
        BusinessModule,
        UsersModule,
        ClientModule,
        ProductModule,
        OrderModule
    ],
    providers: [],
    exports: []
})
export class RoutesModule {}
