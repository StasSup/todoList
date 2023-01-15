import api from './client';
import { NewsResource } from '../../types/apiResources/newsResource';

export default function getNews(): Promise<NewsResource> {
  return api.get('top-headlines?country=ru');
}
