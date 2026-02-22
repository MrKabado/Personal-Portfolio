import axios, { AxiosError } from 'axios';

const prodBase = process.env.NEXT_PUBLIC_BACKEND_URL?.replace(/\/+$/, '');
const localBase = 'http://localhost:8080';
const baseURL = process.env.NODE_ENV === 'production' ? prodBase : localBase;

const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});

const refreshAcessToken = async () => {
  try {
    // Create a separate axios instance for refresh to avoid interceptor loops
    const refreshApi = axios.create({
      baseURL,
      withCredentials: true,
      headers: { 'Content-Type': 'application/json' },
    });
    
    const response = await refreshApi.get('/api/refresh-token');
    return response.data.success === true;
  } catch (error) {
    console.error("Refresh token failed", error);
    return false;
  }
}

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError & { config?: any}) => {
    const originalRequest = error.config;

    // Don't retry if this is already a refresh token request
    if (originalRequest?.url?.includes('/refresh-token')) {
      return Promise.reject(error);
    }

    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const refreshed = await refreshAcessToken();
      if (refreshed) {
        return api(originalRequest); // retry original request
      }
    }

    return Promise.reject(error);
  }
);

export default api;