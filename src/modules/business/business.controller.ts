import { Body, Controller, Get, Post } from "@nestjs/common";
import { BusinessService } from "./business.service";
import { CreateBusinessDto } from "src/dto/create-business.dto";

@Controller("v1/business")
export class BusinessController {
    constructor(private businessService: BusinessService) { }

    @Post()
    async create(@Body() businessDto: CreateBusinessDto): Promise<CreateBusinessDto> {
        const business = await this.businessService.create(businessDto);
        return businessDto;
    }

    @Get()
    async getAllBusiness() {
        return this.businessService.getAllBusiness();
    }
}


