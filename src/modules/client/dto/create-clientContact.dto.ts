import { IsNotEmpty, IsString, IsUUID} from "class-validator";
import { ClientDto } from "./create-client.dto";

export class ClientContactDto {
    @IsUUID()
    @IsString()
    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    @IsNotEmpty()
    client: ClientDto;

    @IsString()
    @IsNotEmpty()
    clientId: string;

    @IsString()
    city: string;

    @IsString()
    zipCode: string;

    @IsString()
    state: string;

    @IsString()
    neighborhood: string;
    
    @IsString()
    numberHouse: string;
    
    @IsString()
    cellphoneNumber: string;
}