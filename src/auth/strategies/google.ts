import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { AuthService } from '../auth.service';
import { Injectable } from '@nestjs/common';
import { LoggerService } from 'src/services/logger/logger.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private authService: AuthService, private logger: LoggerService) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_REDIRECT_URL,
      scope: ['email', 'profile'],
      redirect_uri: process.env.GOOGLE_REDIRECT_URL,
      passReqToCallback: true,
    });
    this.logger.setContext(GoogleStrategy.name);
  }

  async validate(...args: any[]) {
    const [request, accessToken, refreshToken, profile, done] = args;
    try {
      const user = await this.authService.validateUser(profile);
      done(null, user);
    } catch (err) {
      done(err, false);
    }
  }
}
