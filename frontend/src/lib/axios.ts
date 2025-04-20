
import axios from 'axios';

// Create a custom instance of axios
const api = axios.create({
  baseURL: '/api', // This would be replaced with your actual API base URL in production
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    // You could add auth tokens here in a real implementation
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle errors here (e.g., refresh tokens, redirect to login, etc.)
    return Promise.reject(error);
  }
);

export default api;
