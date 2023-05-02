import { Request } from 'express';
import { Business } from 'src/modules/business/entities/business.entity';

export interface AuthRequest extends Request {
  user: Business;
}
