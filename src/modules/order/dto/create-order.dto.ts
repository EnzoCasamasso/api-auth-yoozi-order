import { IsArray, IsNotEmpty, IsString, IsUUID } from "class-validator";
import { CreateOrderItem } from "./create-orderItem.dto";
import { ClientDto } from "../../client/dto/create-client.dto";

export class  CreateOrderDto {
    @IsString()
    @IsUUID()
    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    client: ClientDto; 

    @IsString()
    clientId: string;

    @IsNotEmpty()
    @IsArray()
    orderItems: CreateOrderItem[];

    @IsNotEmpty()
    @IsString()
    orderDate: Date;
}