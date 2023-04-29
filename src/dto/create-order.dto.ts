import { IsArray, IsNotEmpty, IsString, IsUUID } from "class-validator";
import { OrderItem } from "./create-orderItem.dto";
import { ClientDto } from "./client/create-client.dto";

export class  OrderDto {
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
    orderItems: OrderItem[];

    @IsNotEmpty()
    @IsString()
    orderDate: Date;
}