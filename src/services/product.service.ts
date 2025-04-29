import axiosInstance from "@/libs/axios";
import axios from "axios";

export type ListProduct = {
  search?: string;
  page: number;
  limit: number;
};

export type GetProduct = number


export const getProductService = async (productId: GetProduct) => {
  return await axios.get(`http://localhost:3000/api/products/${productId}`);
};

export const listProductService = async (payload: ListProduct) => {
  const { limit = 10, page = 1, search } = payload;
  return await axiosInstance.get(
    `http://localhost:3000/api/products?limit=${limit}&page=${page}&search=${search}`
  );
};
