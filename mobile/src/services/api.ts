import axios from 'axios';
import { NativeEventEmitter } from 'react-native';

export const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3333',
});

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error(error);

    if (error.response?.status === 401) {
      const eventEmitter = new NativeEventEmitter();
      eventEmitter.emit('onUnauthorized');
    }

    return Promise.reject(error.response.data);
  },
);
