import getNews from '../api/news/getNews';
import { News } from '../types/apiResources/newsResource';

export const NewsService = {
  getAll(): Promise<News> {
    return getNews()
      .then((response) => response.data);
  }
}
