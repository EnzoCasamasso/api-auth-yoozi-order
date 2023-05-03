import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";
import { CreateOrderDto } from "./create-order.dto";
export class CreateOrderItem {
    @IsString()
    @IsNotEmpty()
    productName: string; 
    
    @IsNotEmpty()
    orderId: string;

    @IsNumber()
    @IsNotEmpty()
    amount: number;

    @IsNumber()
    subtotal: number;
}