import { Module } from "@nestjs/common";
import { ProductStockService } from "./productStock.service";

@Module({
    imports: [],
    providers: [ProductStockService],
    exports: [ProductStockService]
})
export class ProductStockModule {}