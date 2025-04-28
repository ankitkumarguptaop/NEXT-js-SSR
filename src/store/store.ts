
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/product.slice";



export const store = configureStore({
  reducer: {
    product: productReducer
  },
  middleware: (getDefaultMiddleware:any) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppStore = typeof store;
export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;