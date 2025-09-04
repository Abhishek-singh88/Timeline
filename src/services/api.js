import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    console.log('API Request:', config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log('API Response:', response.status, response.data);
    return response;
  },
  (error) => {
    console.error('API Response Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export const subscribeEmail = async (email) => {
  const response = await api.post('/signup', { email });
  return response.data;
};

export const getSubscriberCount = async () => {
  const response = await api.get('/signup/count');
  return response.data;
};

export const triggerUpdate = async () => {
  const response = await api.post('/update/trigger');
  return response.data;
};

export const previewTimeline = async () => {
  const response = await api.get('/update/preview');
  return response.data;
};

export default api;
