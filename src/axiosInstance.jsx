import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://e-commerce-backend-xinh.onrender.com/',
});

export default axiosInstance;
