import { configureStore } from "@reduxjs/toolkit";
import conversionsReducer from "./conversionsSlice";

// Configuración del store de redux
export const store = configureStore({
  reducer: {
    conversions: conversionsReducer,
  },
});
