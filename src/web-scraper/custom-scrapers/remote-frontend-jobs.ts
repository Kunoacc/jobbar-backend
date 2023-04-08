import { WebScraper } from 'src/web-scraper/web-scraper.interface';

export class RemoteFrontendJobsScraper implements WebScraper {
  scrapeListings(url: string): Promise<any[]> {
    throw new Error('Method not implemented.');
  }
  scrapeListing(url: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
  apply(jobUrl: string, user: any): Promise<string> {
    throw new Error('Method not implemented.');
  }
}
