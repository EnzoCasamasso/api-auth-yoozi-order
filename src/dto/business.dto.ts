import { IsArray, IsEmail, IsNotEmpty, IsString, IsUUID } from "class-validator";
import { ProductDto } from "./product.dto";
import { ClientDto } from "./client/client.dto";

export class BusinessDto {
    @IsString()
    @IsNotEmpty()
    @IsUUID()
    id: string;

    @IsString()
    @IsNotEmpty()
    businessName: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsArray()
    products: ProductDto[];

    @IsArray()
    clients: ClientDto[];
}