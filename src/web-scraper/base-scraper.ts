import { User } from '@prisma/client';
import { WebScraper } from './web-scraper.interface';

export abstract class BaseScraper implements WebScraper {
  abstract scrapeListings(url: string): Promise<any[]>;
  abstract scrapeListing(url: string): Promise<any>;
  abstract apply(jobUrl: string, user: User): Promise<string>;
}
