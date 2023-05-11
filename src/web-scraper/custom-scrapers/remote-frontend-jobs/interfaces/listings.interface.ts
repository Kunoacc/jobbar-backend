export interface Listing {
  id: string;
  title: string;
  content: string;
  contentSnippet: string;
  board: string;
  isoDate: number;
  categories: string;
  author: string;
  link: string;
  image: string;
  createdAt: number;
  updatedAt: number;
  location: string;
  salary: null;
  salaryUnit: null;
  companyId: string;
  wontFixSalary: boolean;
  salaryAutoExtracted: boolean;
  featuredUntil: null;
  featuredAtStatic: null;
  featuredFrom: null;
  sentWithNewsletterAt: null;
  tweetedAt: null;
  tweetId: null;
  paymentIntentId: null;
  pto: null | string;
  ptoUnit: null | string;
  forcedRemote: boolean;
  company: Company;
}

export interface Company {
  id: string;
  name: string;
  imageUrl: string;
  imageUpdated: boolean;
  imageUpdateTried: boolean;
  createdAt: number;
  coldEmailedAt: null;
  coldEmailContent: null | string;
  coldEmailSubject: null | string;
  email: null | string;
  wontColdEmail: boolean;
  updatedAt: number;
  followupEmailedAt: null;
  followupEmailContent: null | string;
  followupEmailSubject: null | string;
  wontFollowUp: boolean;
}
