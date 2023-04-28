import { Module } from '@nestjs/common';

import { BusinessController } from './business.controller';
import { BusinessService } from './business.service';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/database/Prisma.service';

@Module({
    controllers: [
        BusinessController
    ],
    providers: [
        BusinessService,
        PrismaService
    ]
})
export class BusinessModule {}
