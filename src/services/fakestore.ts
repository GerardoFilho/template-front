import axios from 'axios';
import env from '../config/env';

const httpFakestore = axios.create({
  baseURL: env.VITE_HTTP_API_FAKE || '',
  timeout: env.VITE_API_TIMEOUT,
});

const refreshToken = async (refreshToken: string) => {
  const response = await httpFakestore.post('/api/token/refresh/', {
    refresh: refreshToken
  }).then((response) => ({ data: response.data, success: true, error: null, message: 'OK!' }))
    .catch((error) => ({ data: null, success: false, error: error, message: error.message }));
  return response;
}

httpFakestore.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

httpFakestore.interceptors.response.use((response) => response,
  async (error) => {
    const originalRequest = error.config
    const refresh_token = localStorage.getItem('refresh_token')
    if (error.response.status === 401 && !originalRequest._retry && refresh_token) {
      originalRequest._retry = true;
      const request = await refreshToken(refresh_token);

      if (!request.success) {
        console.log('Nao autorizado');
        localStorage.clear();
        return Promise.reject(error);
      }

      localStorage.setItem('access_token', request.data.access_token)
      localStorage.setItem('refresh_token', request.data.refresh_token)
      return axios(originalRequest)
    }

    return Promise.reject(error);
  }
);

export default httpFakestore;
