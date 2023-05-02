import { Module } from '@nestjs/common';
import { BusinessController } from './business.controller';
import { BusinessService } from './business.service';
import { PrismaService } from 'src/prisma/Prisma.service';
import { ServicesModule } from '../services/services.module';
@Module({
    controllers: [BusinessController],
    imports: [ServicesModule],
    providers: [
        BusinessService,
        PrismaService
    ],
    exports: [BusinessService]
})
export class BusinessModule {}
