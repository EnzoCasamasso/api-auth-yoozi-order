import { Injectable } from '@nestjs/common';
import { BusinessService } from 'src/modules/business/business.service';
import * as bcrypt from 'bcrypt' 
import { UnauthorizedError } from './errors/unauthorized.error';
import { Business } from 'src/entities/business.entity';
import { UserPayload } from './models/UserPayload';
import { UserToken } from './models/UserToken';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/modules/users/users.service';
@Injectable()
export class AuthService {
    constructor(
        private readonly businessService: BusinessService,
        private readonly userService: UsersService,
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
        const business = await this.businessService.findByEmail(email);
        const seller = await this.userService.findByEmail(email);
        const isValidPassword = business
          ? await bcrypt.compare(password, business.password)
          : seller
            ? await bcrypt.compare(password, seller.password)
            : false;
            
        if (isValidPassword) {
          return business ? { ...business, password: undefined } : { ...seller, password: undefined };
        }
        throw new UnauthorizedError('Email address or password provided is incorrect');
      }
}
