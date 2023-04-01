import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-github';
import { AuthService } from '../auth.service';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor(private authService: AuthService) {
    super({
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
      scope: ['user:email'],
    });
  }

  async validate(...args: any[]) {
    const [accessToken, refreshToken, profile, done] = args;
    try {
      const user = await this.authService.validateUser(profile);
      done(null, user);
    } catch (err) {
      done(err, false);
    }
  }
}
