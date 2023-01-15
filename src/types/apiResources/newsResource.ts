export type NewsSource = {
  id: string | null;
  name: string;
}

export interface NewsItem {
  source: NewsSource;
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface News {
  status: string;
  totalResults: number;
  articles: NewsItem[];
}

export interface NewsResource {
  data: News;
}