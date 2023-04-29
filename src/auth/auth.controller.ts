import { HttpCode, HttpStatus, UseGuards, Request } from '@nestjs/common';
import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    @UseGuards(LocalAuthGuard)
    login(@Request() req) {
        console.log(req.business)
        return 'Realizar login'
        // return this.authService.login();
    }
}
