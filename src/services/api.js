import axios from 'axios';
// import { AUTH_TOKEN } from '@/constants';

const baseURL = process.env.VUE_APP_API_URL;

const API = axios.create({
  baseURL,
  timeout: 0,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// Setting request interceptor
API.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('AUTH_TOKEN');
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    // console.log('config', config)
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

export const requestAPI = (method, path, data) => {
  return API[method.toLowerCase()](path, data);
};
