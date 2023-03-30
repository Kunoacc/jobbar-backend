import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GithubStrategy } from './strategies/github';
import { AppleStrategy } from './strategies/apple';
import { GoogleStrategy } from './strategies/google';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [AuthController],
  imports: [UserModule],
  providers: [AuthService, GithubStrategy, AppleStrategy, GoogleStrategy],
})
export class AuthModule {}
