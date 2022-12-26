import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://second-chance-api-production.up.railway.app',
});
