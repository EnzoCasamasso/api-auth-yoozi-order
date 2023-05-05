import { UnityMeasurement } from '../entities/productStock.entity';
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsUUID } from 'class-validator';

export class CreateProductStockDto {
    @IsNumber()
    currentInventory: number;

    @IsNumber()
    previousStock: number;

    @IsEnum(UnityMeasurement)
    unityMeasurement: UnityMeasurement;

    @IsOptional()
    currentWeight?: number;

    @IsOptional()    
    previusWeight?: number;

}






