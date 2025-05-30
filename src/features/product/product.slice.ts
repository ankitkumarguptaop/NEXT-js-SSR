"use client";
import { createSlice } from "@reduxjs/toolkit";
import {
  listProduct,
  getProduct,
 
} from "./product.action";
import { act } from "react";


export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    totalPages:0,
    product: {},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(listProduct.fulfilled, (state: any, action: any) => {
        state.products = action.payload;
        state.totalPages =   Math.ceil(action.payload.total / action.payload.limit)
        state.isLoading = false;
      })
      .addCase(listProduct.rejected, (state, action: any) => {
   
        state.isLoading = false;
        state.error = action.error?.message || null;
      })
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action: any) => {
        state.product = action.payload;
        state.isLoading = false;
      })
      .addCase(getProduct.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.error?.message || null;
      })

     
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;