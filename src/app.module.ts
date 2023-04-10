import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebScraperModule } from './web-scraper/web-scraper.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { LoggerModule } from './services/logger/logger.module';
import { ProfileController } from './profile/profile.controller';
import { ProfileService } from './profile/profile.service';
import { ProfileModule } from './profile/profile.module';
import { CloudinaryService } from './services/cloudinary/cloudinary.service';

@Module({
  imports: [
    WebScraperModule,
    UserModule,
    AuthModule,
    LoggerModule,
    ProfileModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController, ProfileController],
  providers: [AppService, ProfileService, CloudinaryService],
})
export class AppModule {}
