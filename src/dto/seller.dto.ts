import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class Seller {
    
    @IsString()
    @IsNotEmpty()
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
    clients: any[];  //tipar corretamente
}