import { IsEmail, IsNotEmpty, IsString } from "class-validator";
export class CreateSellerDto {
    @IsString()
    @IsNotEmpty()
    userName: string;

    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    password: string;

    // @IsNotEmpty()
    // business: CreateBusinessDto;
}