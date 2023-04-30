import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getWorks(): string {
    return 'API works!';
  }
}
