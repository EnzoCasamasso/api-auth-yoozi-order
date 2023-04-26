import { IsArray, IsEmail, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";
import { ClientDto } from "./client/client.dto";
import { BusinessDto } from "./business.dto";
export class SellerDto {
    @IsString()
    @IsNotEmpty()
    @IsUUID()
    id: string;

    @IsString()
    @IsNotEmpty()
    userName: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    business: BusinessDto;

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