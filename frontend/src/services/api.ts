import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.VITE_API_URL || 'http://localhost:3333',
});

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error(error);
    return Promise.reject(error.response.data);
  },
);
