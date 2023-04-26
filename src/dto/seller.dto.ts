import { IsArray, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class Seller {
    @IsString()
    @IsNotEmpty()
    @IsUUID()
    id: string;

    @IsString()
    @IsNotEmpty()
    userName: string;

    @IsNotEmpty()
    business: any; //criar dto business

    @IsNotEmpty()
    @IsString()
    businessId: string;

    @IsOptional()
    @IsArray()
    clients: any[];  //tipar corretamente
}