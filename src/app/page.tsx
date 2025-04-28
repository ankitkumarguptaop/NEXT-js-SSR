import ProductCard from "@/components/product-cart/product-cart";
import { listProduct } from "@/features/product/product.action";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

// type Product = {
//   id: number;
//   title: string;
//   price: number;
//   thumbnail: string;
//   description: string;
//   rating: number;
// };

// async function getProducts(
//   search: string,
//   limit: number,
//   page: number
// ): Promise<Product[]> {
//   const response = await axios.get(
//     `https://dummyjson.com/products/search?q=${search}&limit=${limit}&skip=${
//       (page - 1) * limit
//     }`
//   );
//   return response.data.products;
// }

export default async function Home() {






// const products =useSelector((state)=> state.product.products)

  return (
   
      <></>
          // <ProductCard></ProductCard>
   
   
  );
}
