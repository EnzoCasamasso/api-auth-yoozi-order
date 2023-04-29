import { Body, Controller, Get, Post, HttpException, HttpStatus, UsePipes, ValidationPipe } from "@nestjs/common";
import { BusinessService } from "./business.service";
import { BusinessDto } from "src/dto/business.dto";

@Controller("v1/business")
export class BusinessController {
    constructor(private businessService: BusinessService) { }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async createBusiness(@Body() businessDto: BusinessDto): Promise<BusinessDto> {
        const business = await this.businessService.createBusiness(businessDto);
        return businessDto;
    }

    @Get()
    async getAllBusiness() {
        return this.businessService.getAllBusiness();
    }
}


