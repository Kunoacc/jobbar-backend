import { User } from '@prisma/client';

export interface WebScraper {
  scrapeListings(url: string): Promise<any[]>;
  scrapeListing(url: string): Promise<any>;
  apply(jobUrl: string, user: User): Promise<string>;
}
