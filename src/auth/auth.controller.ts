import { HttpCode, HttpStatus } from '@nestjs/common';
import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }

    @Post()
    @HttpCode(HttpStatus.OK)
    login() {
        return this.authService.login();
    }
}