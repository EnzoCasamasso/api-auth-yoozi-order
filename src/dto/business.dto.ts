import { IsArray, IsEmail, IsNotEmpty, IsString, IsUUID } from "class-validator";
import { ProductDto } from "./product.dto";
import { ClientDto } from "./client/client.dto";
import { SellerDto } from "./seller.dto";

export class BusinessDto {
    @IsString()
    @IsUUID()
    id: string;

    @IsString()
    @IsNotEmpty()
    businessName: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    sellers: SellerDto;

    @IsArray()
    products: ProductDto[];

    @IsArray()
    clients: ClientDto[];
}