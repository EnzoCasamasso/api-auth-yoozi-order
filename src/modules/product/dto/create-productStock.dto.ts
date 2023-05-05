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

    @IsOptional()
    lastSale?: Date;

    @IsOptional()
    lastEntry?: Date;

    @IsOptional()
    lastModification?: Date;

    @IsOptional()
    lastEntryLogin?: string;

    @IsOptional()
    lastSaleLogin?: string;

    @IsOptional()
    deleted_at?: Date;
}






