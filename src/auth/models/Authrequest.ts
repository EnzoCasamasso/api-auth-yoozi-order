import { Request } from 'express';
import { Business } from 'src/entities/business.entity';

export interface AuthRequest extends Request {
  user: Business;
}
