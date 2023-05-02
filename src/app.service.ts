import { Injectable } from '@nestjs/common';
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
