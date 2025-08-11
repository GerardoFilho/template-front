import axios from 'axios';
import env from '../config/env';

const api = axios.create({
  baseURL: env.VITE_HTTP_API || '',
  timeout: env.VITE_API_TIMEOUT,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn('Não autorizado');
    }
    return Promise.reject(error);
  }
);

export default api;
