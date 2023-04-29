import { HttpCode, HttpStatus, UseGuards, Request } from '@nestjs/common';
import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { IsPublic } from './decorators/is-public.decorator';

@Controller()
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }

    @IsPublic()
    @UseGuards(LocalAuthGuard)
    @Post('login')
    @HttpCode(HttpStatus.OK)
    login(@Request() req) {
        console.log("req.user")
        return 'Realizar login';
    }
}
