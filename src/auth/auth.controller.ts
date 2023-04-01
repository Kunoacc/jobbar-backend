/* eslint-disable @typescript-eslint/no-empty-function */
import { Controller, Get, Redirect, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { User } from '@prisma/client';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('github')
  @UseGuards(AuthGuard('github'))
  async githubAuth() {}

  @Get('github/callback')
  @UseGuards(AuthGuard('github'))
  @Redirect()
  async githubAuthCallback(@Req() request: User) {
    const jwt = await this.authService.generateJwt(request);
    return {
      url: `${process.env.FRONTEND_URL}/?jwt=${jwt}`,
    };
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  @Redirect()
  async googleAuthCallback(@Req() request: User) {
    const jwt = await this.authService.generateJwt(request);
    return {
      url: `${process.env.FRONTEND_URL}/?jwt=${jwt}`,
    };
  }

  @Get('logout')
  @Redirect()
  async logout(@Req() request: any, @Res() response: any) {
    request.logout();
    response.clearCookie('jwt');
    return {
      url: `${process.env.FRONTEND_URL}/`,
    };
  }
}
