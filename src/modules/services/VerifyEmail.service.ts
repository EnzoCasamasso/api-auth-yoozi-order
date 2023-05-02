import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/Prisma.service";

@Injectable()
export class VerifyEmailService {
    constructor(private readonly prisma: PrismaService) { }

    async isEmailAlreadyRegistred(email: string): Promise<boolean> {
        const businessEmailRegistred = await this.prisma.business.findUnique({
            where: { email }
        })

        const sellerEmailRegistred = await this.prisma.seller.findUnique({
            where: { email }
        })

        if (businessEmailRegistred || sellerEmailRegistred) {
            return true;
        }

        return false;
    }

}