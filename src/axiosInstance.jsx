import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://e-commerce-backend-uwpw.onrender.com/',
});

export default axiosInstance;
