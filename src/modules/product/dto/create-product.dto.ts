import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";
import { CreateProductStockDto } from "./create-productStock.dto";
export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    description: string;

    @IsOptional()
    stock?: CreateProductStockDto;

    @IsNumber()
    @IsNotEmpty()
    salePrice: number;

    @IsNumber()
    coastPrice: number;
}


// "stock":{
//     "id":"d67f7d36-7ab6-45a7-9812-0455a2fc6e18",
//     "productId":"76635361-eade-4563-b2e7-8c7829ec8395",
//     "currentInventory":100,
//     "previousStock":0,
//     "unityMeasurement":"UN"
// },