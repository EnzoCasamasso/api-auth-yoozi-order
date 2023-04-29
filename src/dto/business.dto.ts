import { IsArray, IsEmail, IsEmpty, IsNotEmpty, IsString, IsUUID } from "class-validator";
import { ProductDto } from "./product.dto";
import { ClientDto } from "./client/client.dto";
import { SellerDto } from "./seller.dto";

export class BusinessDto {
    @IsString()
    @IsUUID()
    id: string;

    @IsString()
    @IsNotEmpty({message: 'Nome da empresa não pode ser vazio'})
    businessName: string;

    @IsEmail()
    @IsNotEmpty({message: 'email é obrigatório'})
    email: string;

    @IsNotEmpty()
    password: string;

    @IsEmpty()
    sellers: SellerDto[];

    @IsEmpty()
    products: ProductDto[];

    @IsEmpty()
    clients: ClientDto[];
}