import { UnityMeasurement } from "../entities/productStock.entity";
import { IsEnum, IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";
import { CreateProductStockDto } from "./create-productStock.dto";
export class CreateProductDto {
    @IsUUID()
    id?: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    stockDto: CreateProductStockDto;

    @IsEnum(UnityMeasurement)
    unityMeasurement: UnityMeasurement;

    @IsNumber()
    @IsNotEmpty()
    salePrice: number;

    @IsNumber()
    coastPrice: number;
}