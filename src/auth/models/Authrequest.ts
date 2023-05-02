import { Request } from 'express';
import { AuthUser } from './AuthUser';

export interface AuthRequest extends Request {
  user: AuthUser;
}
