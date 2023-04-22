/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Injectable,
  OnApplicationBootstrap,
} from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { WebScraper } from './web-scraper.interface';
import { ModuleRef } from '@nestjs/core';
import { JobSource, Prisma } from '@prisma/client';

type Scraper = {
  scraper: WebScraper;
  source: JobSource;
};

@Injectable()
export class WebScraperService {
  private scrapers: Map<string, Scraper> = new Map();

  constructor(private readonly prisma: PrismaService, private readonly moduleref: ModuleRef) {}

  async onApplicationBootstrap(): Promise<void> {
    const scrapingSources = await this.prisma.jobSource.findMany();
    scrapingSources.forEach((source) => {
      const scraperImplementation = this.moduleref.get(source.implementation, { strict: false });
      this.scrapers.set(source.implementation, {
        scraper: scraperImplementation.get(source.implementation),
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
