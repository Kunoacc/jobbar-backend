import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import axios, { Axios, AxiosResponse } from 'axios';
import { WebScraper } from 'src/web-scraper/web-scraper.interface';
import { Listing } from './interfaces/listings.interface';

@Injectable()
export class RemoteFrontendJobsScraper implements WebScraper {
  private static readonly url: string =
    'https://www.remotefrontendjobs.com/api/jobs';

  private http: Axios;

  constructor() {
    this.http = axios.create({
      baseURL: RemoteFrontendJobsScraper.url,
      timeout: 10000,
    });
  }

  async scrapeForListings(lastJobFetchedTimestamp: number): Promise<Listing[]> {
    const jobs = [];
    let offset = 0;
    const limit = 10;
    let hasMoreJobs = true;

    while (hasMoreJobs) {
      const url = new URL(this.http.defaults.baseURL);

      url.searchParams.append('offset', offset.toString());
      url.searchParams.append('limit', limit.toString());
      url.searchParams.append('query', '');
      url.searchParams.append('onlyWithSalaries', 'false');
      url.searchParams.append('onlyWithPto', 'false');

      const response: AxiosResponse<Listing[]> = await this.http.get(
        url.toString(),
      );

      const jobs = response.data;

      for (const job of jobs) {
        if (job.createdAt > lastJobFetchedTimestamp) {
          jobs.push(job);
        } else {
          hasMoreJobs = false;
          break;
        }
      }

      if (jobs.length < limit) {
        hasMoreJobs = false;
      } else {
        offset += limit;
      }
    }

    return jobs;
  }

  scrapeListing(url: string): Promise<any> {
    throw new Error('Method not implemented.');
  }

  apply(jobUrl: string, user: User): Promise<string> {
    return Promise.resolve('Not implemented');
  }
}
