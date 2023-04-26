import { IsArray, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class ClientDto {
    @IsString()
    @IsUUID()
    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsArray()
    @IsOptional()
    orders: any[] //tipar da forma correta

    @IsOptional()
    clientContact: any //tipar da forma correta
    
    @IsOptional()
    @IsString()
    clienteContactId: string
}