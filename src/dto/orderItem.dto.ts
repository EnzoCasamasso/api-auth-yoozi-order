import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";

export class OrderItem {
    @IsUUID()
    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    productName: string;

    @IsNotEmpty()
    order: any; //tipar da forma correta 

    @IsNotEmpty()
    orderId: string;

    @IsNumber()
    @IsNotEmpty()
    amount: number;

    @IsNumber()
    subtotal: number;
}