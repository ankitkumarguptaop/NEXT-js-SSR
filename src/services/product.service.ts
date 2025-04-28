import axios from "axios";

export type ListProduct = {
  search?: string ;
  page: number;
  limit: number ;
};

export type GetProduct = {
  productId: number;
};

export const getProductService = async (payload: GetProduct) => {
  const { productId } = payload;
  return await axios.get(`https://dummyjson.com/products/${productId}`);
};

export const listProductService = async (payload: ListProduct) => {
  const { limit=10 , page=1, search } = payload;
  return await axios.get(
    `https://dummyjson.com/products/search?q=${search}&limit=${limit}&skip=${
      (page - 1) * limit
    }`
  );
};
