import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('auth')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    // user login route

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req): Promise<any>{
        return await this.authService.generateToken(req.user);
    }


    // user profile
    @UseGuards(JwtAuthGuard)
    @Get('user')
    async user(@Request() req): Promise<any>{
        return req.user;
    }
}
