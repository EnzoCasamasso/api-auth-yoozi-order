import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { BusinessService } from "./business.service";
import { CreateBusinessDto } from "src/modules/business/dto/create-business.dto";
import { Business } from "src/modules/business/entities/business.entity";
import { IsPublic } from "src/auth/decorators/is-public.decorator";
@Controller("v1/business")
export class BusinessController {
    constructor(private businessService: BusinessService) { }

    @IsPublic()
    @Post()
    async create(@Body() businessDto: CreateBusinessDto): Promise<Business> {
        const business = await this.businessService.create(businessDto);
        return business
    }

    @Get()
    async getAllBusiness() {
        return this.businessService.getAllBusiness();
    }
}


