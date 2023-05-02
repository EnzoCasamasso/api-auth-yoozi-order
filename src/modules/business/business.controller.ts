import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { BusinessService } from "./business.service";
import { CreateBusinessDto } from "src/modules/business/dto/create-business.dto";
import { IsPublic } from "src/auth/decorators/is-public.decorator";
import { Response } from "express";
@Controller("v1/business")
export class BusinessController {
    constructor(private businessService: BusinessService) { }

    @IsPublic()
    @Post()
    async create(
        @Body() businessDto: CreateBusinessDto, 
        @Res() res: Response
    ): Promise<void> {    
        try {
            const business = await this.businessService.create(businessDto);
            res.json({
                ...business
            });
        } catch (error) {
            res.status(409).json({
                error: error.message,
            });
        }
    }

    @Get()
    async getAllBusiness() {
        return this.businessService.getAllBusiness();
    }
}


