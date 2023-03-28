import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { WebScraper } from './web-scraper.interface';

@Injectable()
export class WebScraperService implements OnModuleInit {
  private scrapers: Map<string, WebScraper> = new Map();

  constructor(private prisma: PrismaService) {}

  async onModuleInit(): Promise<void> {
    const scrapingSources = await this.prisma.jobSource.findMany();
    scrapingSources.forEach((source) => {});
  }

  async getScraper(sourceKey: string): Promise<WebScraper> {
    for (const [key, scraper] of this.scrapers) {
      if (sourceKey === key) {
        return scraper;
      }
    }
    return;
  }
}
