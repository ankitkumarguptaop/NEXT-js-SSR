import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_FRONTEND_URL,
  headers: {}, 
  validateStatus: () => true
});

export default axiosInstance;