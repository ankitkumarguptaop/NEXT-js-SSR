"use client";
import { Box, Grid, Pagination, Stack, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "@/features/product/product.action";
import { useEffect, useState } from "react";
import ProductCard from "@/components/product-cart/product-cart";
import styles from "./products.module.css"
import { MoonLoader } from "react-spinners";
export interface Products {
  id: number;
  title: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  thumbnail: string;
  reviews: {
    date:string
    reviewerName: string;
    comment: string;
  }[];
}

export default function ProductsPage() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [limit] = useState<number>(8);
  const isLoading =  useSelector(
    (state: { product: {isLoading : boolean }}) =>
      state.product.isLoading
  );

  useEffect(() => {
    dispatch(
      listProduct({
        limit,
        page,
        search,
      })
    );
  }, [search, limit, page]);

  const products = useSelector(
    (state: { product: { products: { products: Products[] } } }) =>
      state.product.products
  );
  const totalPages = useSelector(
    (state: { product: {totalPages:number} }) =>
      state.product.totalPages
  );
  return (
    <>
      <Box className={styles["products"]}>
        <Box className={styles["text-feild"]}>
          <TextField
            id="text-feild"
            label="Search Porducts"
            variant="filled"
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </Box>
       { !isLoading ? <> <Grid container height="85%" spacing={2}>
        {products?.products?.map((product) => (
          <ProductCard
            key={product.id}
            name={product.title}
            description={product.description}
            price={product.price}
            rating={product.rating}
            image={product.thumbnail}
            id={product.id}
            thumbnail={product.thumbnail}
            title={product.title}
            reviews={product.reviews}
          />
        ))}
      </Grid>

        <Box className={styles["pagination"]}>
          <Stack spacing={2}>
            <Pagination
              defaultPage={1}
              page={page}
              count={totalPages}
              variant="outlined"
              shape="rounded"
              onChange={(e, page: number) => {
                setPage(page);
              }}
            />
          </Stack>
        </Box>
        </>
         : 
         <Box sx={{display:"flex", alignItems:"center", justifyContent:"center"}}>
          <MoonLoader />
          </Box>}
      </Box>

     
    </>
  );
}
