import { HttpCode, HttpStatus, UseGuards, Request } from '@nestjs/common';
import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { IsPublic } from './decorators/is-public.decorator';
import { AuthRequest } from './models/AuthRequest';
import { UserToken } from './models/UserToken';
@Controller('v1/login')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }

    @IsPublic()
    @UseGuards(LocalAuthGuard)
    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Request() req: AuthRequest): Promise<UserToken> {
        return this.authService.login(req.user);
    }
}
