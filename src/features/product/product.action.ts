import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  GetProduct,
getProductService,ListProduct,listProductService
} from "../../services/product.service";
import {LIST ,GET } from "./product.type";



export const getProduct :any = createAsyncThunk(
    GET,
  async (payload :GetProduct, { rejectWithValue }) => {
    try {
      const response = await getProductService(payload);
      const data: any = response.data;
      console.log("response data:", data);
      return data;
    } catch (error: any) {
      console.error("error :", error);
      return rejectWithValue(error.response?.data);
    }
  }
);

export const listProduct :any = createAsyncThunk(
  LIST,
  async (payload :ListProduct , { rejectWithValue }) => {
    try { 
      const response = await listProductService(payload);
      const data = response.data;
      console.log("response data:", data);
      return data;
    } catch (error: any) {
      console.error("error:", error);
      return rejectWithValue(error.response?.data);
    }
  }
);
