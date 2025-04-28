'use client';


import { Provider } from "react-redux";
import { store } from "./store";
import { JSX } from "@emotion/react/jsx-runtime";
import { ReactNode } from "react";

interface ReduxProviderProps {
  children: ReactNode;
}

export default function ReduxProvider({ children }: ReduxProviderProps) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
