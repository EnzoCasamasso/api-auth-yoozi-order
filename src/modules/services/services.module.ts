import { Module } from '@nestjs/common';
import { VerifyEmailService } from './VerifyEmail.service';
import { PrismaService } from 'src/prisma/Prisma.service';

@Module({
    imports: [],
    providers: [VerifyEmailService, PrismaService],
    exports: [VerifyEmailService]
})
export class ServicesModule {}
