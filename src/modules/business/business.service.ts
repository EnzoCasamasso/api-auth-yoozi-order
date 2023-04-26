import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/Prisma.service';

@Injectable()
export class BusinessService {
    constructor(private readonly prisma: PrismaService) { }
}