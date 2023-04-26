import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";
import { OrderDto } from "./order.dto";
export class OrderItem {
    @IsUUID()
    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    productName: string;

    @IsNotEmpty()
    order: OrderDto; //tipar da forma correta 

    @IsNotEmpty()
    orderId: string;

    @IsNumber()
    @IsNotEmpty()
    amount: number;

    @IsNumber()
    subtotal: number;
}