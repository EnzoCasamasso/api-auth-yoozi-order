import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { BusinessService } from "./business.service";
import { CreateBusinessDto } from "src/dto/create-business.dto";
import { Business } from "src/entities/business.entity";
import { IsPublic } from "src/auth/decorators/is-public.decorator";
import { LocalAuthGuard } from "src/auth/guards/local-auth.guard";

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


