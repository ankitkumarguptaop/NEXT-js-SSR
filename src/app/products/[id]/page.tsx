import { Box, Typography } from "@mui/material";
import styles from "./product.module.css";

const ProductPage = () => {


  return (
    <Box className={styles["product"]}>
      <Box className={styles["product-image"]}>
        <img src={product?.thumbnail} width={"70%"} alt="product image" />
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
          {product?.reviews.map((review) => {
            return (
              <>
                <Typography fontSize={20} fontWeight="Bold" marginLeft={8}>
                  {review?.reviewerName}
                </Typography>
                <Typography fontSize={15} fontWeight="light" marginLeft={8}>
                  - {review?.comment}
                </Typography>
              </>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPage;
