import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const initialState = {};

export const store = configureStore({
  reducer: {
    root: rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(),
  devTools: true,
  preloadedState: initialState,
});
