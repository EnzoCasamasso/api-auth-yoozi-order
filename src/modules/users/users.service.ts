import { Injectable, NotFoundException, Res } from '@nestjs/common';
import { PrismaService } from './../../database/Prisma.service';
import { Seller } from '@prisma/client';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {

    }

    async create(data) {
       const user = await this.prisma.seller.create({
            data,
        })

        return user;
    }


    async getAllSellers(): Promise<Seller[]> {
        const users = await this.prisma.seller.findMany();
    
        if (users.length > 0) {
            return [...users]
        }
        
        throw new NotFoundException('Não há usuários disponíveis.');
    }

    async getSeller(id: string): Promise<Seller> {
        const user = await this.prisma.seller.findUnique({
            where: {
                id: id
            }
        })

        if (user) return user; 

        else {
            throw new Error(JSON.stringify("User not found")); 
        }  
    }

    async updateUser(id: string, user: Seller) {
        await this.prisma.seller.update({
            where :{
                id
            },
            data: {...user }
        });
    }

    async deleteUser(id: string) {
        const user = await this.prisma.seller.delete({
            where : {
                id,
            }
        })

        if (user) return user;
        else {
            throw new Error('Usuario não encontrado');
        }
    }
}
