import { Injectable } from '@nestjs/common';
import { Business } from './entities/business.entity';
import { Seller } from './entities/seller.entity';

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
