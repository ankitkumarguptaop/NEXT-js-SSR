"use client";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import styles from "./product.module.css";
import { Products } from "../page";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "@/features/product/product.action";
import { useParams } from "next/navigation";
import Image from "next/image";
import { MoonLoader } from "react-spinners";
const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector(
    (state: { product: { product: Products } }) => state.product.product
  );
  const isLoading = useSelector(
    (state: { product: { isLoading: boolean } }) => state.product.isLoading
  );

  useEffect(() => {
    dispatch(getProduct(id));
  }, []);

  return (
    <>
      {!isLoading ? (
        <Box className={styles["product"]}>
          <Box className={styles["product-image"]}>
        {  product?.thumbnail &&  <Image alt={product?.title} src={product?.thumbnail} width="500" height="500"></Image>} 
          </Box>
          <Box className={styles["product-description"]}>
            <Typography fontSize={35} fontWeight={400} margin={8}>
              {product?.title}
              {product?.description}
            </Typography>
            <Typography fontSize={32} fontWeight="light" margin={8}>
              Price : $ {product?.price}
            </Typography>

            <Box>
              <Typography fontSize={20} fontWeight="Bold" padding={3}>
                Reviews
              </Typography>
              {product?.reviews?.map((review, index) => {
                return (
                  <Box key={`${review.date}-${index}`}>
                    <Typography fontSize={20} fontWeight="Bold" marginLeft={8}>
                      {review?.reviewerName}
                    </Typography>
                    <Typography fontSize={15} fontWeight="light" marginLeft={8}>
                      - {review?.comment}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MoonLoader />
        </Box>
      )}
    </>
  );
};

export default ProductPage;
