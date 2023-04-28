import { Body, Controller, Get, Post } from "@nestjs/common";
import { BusinessService } from "./business.service";
import { BusinessDto } from "src/dto/business.dto";

@Controller("v1/business")
export class BusinessController {
    constructor(private businessService: BusinessService) { }

    @Post()
    async creatrBusiness(@Body() businessDto: BusinessDto): Promise<BusinessDto> {
        
       this.businessService.
        if (business) console.log(business);

        return {
            ...businessDto,
            products: undefined,
            clients: undefined
        }
    }


    @Get()
    async getAllBusiness() {
        return this.businessService.getAllBusiness();
    }
}


