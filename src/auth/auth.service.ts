import { Injectable } from '@nestjs/common';
import { BusinessService } from 'src/modules/business/business.service';
import * as bcrypt from 'bcrypt' 
import { UnauthorizedError } from './errors/unauthorizided.error';
@Injectable()
export class AuthService {
    constructor(private readonly businessService: BusinessService) {

    }

    // async login(business: Business): Promise<UserToken> {
    //     const payload: UserPayload = {
    //       sub: business.id,
    //       email: business.email,
    //       name: business.businessName,
    //     };
    
    //     return {
    //       access_token: this.jwtService.sign(payload),
    //     };
    //   }

    async validateBusinessOrSeller(email: string, password: string) {
        const business = await this.businessService.findByEmail(email)

        if (business) {
            const isPasswordValid = await bcrypt.compare(password, business.password)

            if (isPasswordValid) {
                return {
                    ...business,
                    password: undefined
                }
            }
        }

        throw new UnauthorizedError('Email address or password provided is incorrect')
    }
}
