import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GithubStrategy } from './strategies/github';
import { AppleStrategy } from './strategies/apple';
import { GoogleStrategy } from './strategies/google';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { LoggerService } from 'src/services/logger/logger.service';
import { JwtAuthGuard } from './guards/jwt/jwt';

@Module({
  controllers: [AuthController],
  imports: [
    UserModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '3d' },
    }),
  ],
  providers: [
    AuthService,
    GithubStrategy,
    AppleStrategy,
    GoogleStrategy,
    LoggerService,
    JwtAuthGuard,
  ],
  exports: [AuthService],
})
export class AuthModule {}
