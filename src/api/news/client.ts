import axiosFabric, { AxiosInstance } from 'axios';

// env variable
const API_URL = 'https://newsapi.org/v2';
const API_KEY = '1c510a8c98fc44489f426b04cd055cc0';

const createBaseClient = (): AxiosInstance => axiosFabric.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'X-Api-Key': API_KEY,
  },
});

const client = createBaseClient();

export default client;
