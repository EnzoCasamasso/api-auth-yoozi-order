import { Injectable } from '@nestjs/common';
import { Business } from './modules/business/entities/business.entity';
import { Seller } from './modules/users/entities/seller.entity';

@Injectable()
export class AppService {

  getWorks() {
    return {
      name:'yoozy-order-api',
      status: 'operant',
      version: '1.0.0'
    };
  }
}
