import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

export class Product {
    @IsNotEmpty()
    @IsString()
    @IsUUID()
    id: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @IsNotEmpty()
    salePrice: number;

    @IsNumber()
    @IsNotEmpty()
    costPrice: number;

    @IsNumber()
    @IsOptional()
    margin: number;
}