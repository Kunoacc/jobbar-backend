import { Module } from '@nestjs/common';
import { WebScraperService } from './web-scraper.service';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Module({
  providers: [WebScraperService, PrismaService],
})
export class WebScraperModule {}
