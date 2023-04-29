import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";
import { CreateOrderDto } from "./create-order.dto";
export class CreateOrderItem {
    @IsUUID()
    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    productName: string;

    @IsNotEmpty()
    order: CreateOrderDto; //tipar da forma correta 

    @IsNotEmpty()
    orderId: string;

    @IsNumber()
    @IsNotEmpty()
    amount: number;

    @IsNumber()
    subtotal: number;
}