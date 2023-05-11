import { Injectable } from "@nestjs/common";
import { WebScraper } from "../../web-scraper.interface";
import { Prisma } from "@prisma/client";

@Injectable()
export class RemoteBackendJobsScraper implements WebScraper {
  scrapeForListings(url: string): Promise<any[]> {
    throw new Error("Method not implemented.");
  }
  scrapeListing(url: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
  apply(jobUrl: string, user: Prisma.UserCreateInput): Promise<string> {
    throw new Error("Method not implemented.");
  }
}
