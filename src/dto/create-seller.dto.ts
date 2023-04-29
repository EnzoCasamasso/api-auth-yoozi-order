import { IsArray, IsEmail, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";
import { ClientDto } from "./client/create-client.dto";
import { CreateBusinessDto } from "./create-business.dto";
export class SellerDto {
    @IsString()
    @IsUUID()
    id: string;

    @IsString()
    @IsNotEmpty()
    userName: string;

    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    business: CreateBusinessDto;

    @IsString()
    @IsNotEmpty()
    businessName: string;

    @IsNotEmpty()
    @IsString()
    businessId: string;

    @IsOptional()
    @IsArray()
    clients: ClientDto[]; 
}