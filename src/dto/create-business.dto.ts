import { 
  IsEmail,
  IsNotEmpty,
  IsString, 
  Matches, 
  MaxLength, 
  MinLength
} from "class-validator";

export class BusinessDto {
    @IsString()
    @IsNotEmpty({message: 'Nome da empresa não pode ser vazio'})
    @MinLength(3)
    @MaxLength(20)
    businessName: string;

    @IsEmail()
    @IsNotEmpty({message: 'email é obrigatório'})
    email: string;

    @IsNotEmpty()
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password too weak',
      })
    password: string;
}