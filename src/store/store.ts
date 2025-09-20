import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./portfolioSlice";

export const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
  },
});

// ✅ Correctly export RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
