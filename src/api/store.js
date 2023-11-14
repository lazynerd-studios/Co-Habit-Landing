/* eslint-disable no-undef */
import { configureStore } from "@reduxjs/toolkit";
import { listingApi } from "./listingApi";

export const store = configureStore({
  reducer: {
    [listingApi.reducerPath]: listingApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([listingApi.middleware]),
});
