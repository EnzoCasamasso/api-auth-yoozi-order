import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator";
export class CreateSellerDto {
    @IsString()
    @IsNotEmpty()
    userName: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsBoolean()
    isAdmin: boolean;
    
    @IsNotEmpty()
    password: string;
}