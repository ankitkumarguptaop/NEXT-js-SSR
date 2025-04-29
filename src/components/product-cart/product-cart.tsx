// "use client";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { redirect } from "next/navigation";
import { Grid, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "@/features/product/product.action";
// import { useState } from "react";

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
    reviewerName: string;
    comment: string;
  }[];
}

export default function ProductCard(product : Products ) {
  return (
    <>
      <Grid size={{ xs: 12, md: 6, xl: 3 }} key={product.id}>
        <Card
          sx={{ maxWidth: 345, cursor: "pointer" }}
          onClick={() => redirect(`products/${product.id}`)}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={product.thumbnail}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {product.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => redirect(`products/${product.id}`)}
              variant="contained"
              size="small"
            >
              Details
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}
