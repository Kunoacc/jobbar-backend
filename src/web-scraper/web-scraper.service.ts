/* eslint-disable @typescript-eslint/no-empty-function */
import {
  INestApplicationContext,
  Injectable,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { WebScraper } from './web-scraper.interface';
import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { JobSource, Prisma } from '@prisma/client';

type Scraper = {
  scraper: WebScraper;
  source: JobSource;
};

@Injectable()
export class WebScraperService implements OnModuleInit {
  private scrapers: Map<string, Scraper> = new Map();
  private app: INestApplicationContext;

  constructor(private prisma: PrismaService) {}

  async onModuleInit(): Promise<void> {
    this.app = await NestFactory.createApplicationContext(AppModule);
    const scrapingSources = await this.prisma.jobSource.findMany();
    scrapingSources.forEach((source) => {
      this.scrapers.set(source.implementation, {
        scraper: this.app.get(source.implementation),
        source,
      });
    });
  }

  async getScraper(sourceKey: string): Promise<Scraper> {
    for (const [key, scraper] of this.scrapers) {
      if (sourceKey === key) {
        return scraper;
      }
    }
    return;
  }

  async getScrapers(): Promise<Map<string, Scraper>> {
    return this.scrapers;
  }

  async getScraperKeys(): Promise<string[]> {
    return Array.from(this.scrapers.keys());
  }

  async scrape(sourceKey: string): Promise<any> {
    const { scraper, source } = await this.getScraper(sourceKey);
    if (!scraper) {
      throw new Error(`No scraper found for source key ${sourceKey}`);
    }
    return await scraper.scrapeListing(source.url);
  }

  async apply(
    sourceKey: string,
    url: string,
    user: Prisma.UserCreateInput,
  ): Promise<any> {
    const { scraper } = await this.getScraper(sourceKey);
    if (!scraper) {
      throw new Error(`No scraper found for source url ${url}`);
    }
    return await scraper.apply(url, user);
  }
}
