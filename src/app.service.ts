import { Injectable } from '@nestjs/common';
import { Business } from './entities/business.entity';
import { Seller } from './entities/seller.entity';

@Injectable()
export class AppService {
  private currentUserConnected: Business;
  getWorks() {
    return {
      name:'yoozy-order-api',
      status: 'operant',
      version: '1.0.0'
    };
  }

  conectUser(currentBusiness: Business) {
    this.currentUserConnected = currentBusiness;
  }

  userConnected(): Business {
    return {
      ...this.currentUserConnected
    }
  }
}
