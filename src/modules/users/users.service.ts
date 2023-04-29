import { Injectable, NotFoundException, Res } from '@nestjs/common';
import { PrismaService } from '../../prisma/Prisma.service';
import { SellerDto } from 'src/dto/create-seller.dto';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }
    
}
