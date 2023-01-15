import axiosFabric, { AxiosInstance } from 'axios';

// env variable
const API_URL = 'http://localhost:5000';

const createBaseClient = (): AxiosInstance => axiosFabric.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
  },
});

const client = createBaseClient();

export default client;
