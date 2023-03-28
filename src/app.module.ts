import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebScraperModule } from './web-scraper/web-scraper.module';

@Module({
  imports: [WebScraperModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
