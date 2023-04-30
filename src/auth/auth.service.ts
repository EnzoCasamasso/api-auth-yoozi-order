import { Injectable } from '@nestjs/common';
import { BusinessService } from 'src/modules/business/business.service';
import * as bcrypt from 'bcrypt' 
import { UnauthorizedError } from './errors/unauthorized.error';
import { Business } from 'src/entities/business.entity';
import { UserPayload } from './models/UserPayload';
import { UserToken } from './models/UserToken';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor(
        private readonly businessService: BusinessService,
        private readonly jwtService: JwtService
    ) { }

    async login(business: Business): Promise<UserToken> {
        const payload: UserPayload = {
          sub: business.id,
          email: business.email,
          name: business.businessName,
        };
    
        return {
          access_token: this.jwtService.sign(payload),
        };
      }

    async validateUser(email: string, password: string) {
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
