import { createSlice } from "@reduxjs/toolkit";

// Estado inicial, cargando las conversiones guardadas desde localStorage
const initialState = {
  savedConversions: JSON.parse(localStorage.getItem("savedConversions")) || [],
};

const conversionsSlice = createSlice({
  name: "conversions", // Nombre del slice
  initialState,
  reducers: {
    // Agrega una nueva conversión y la guarda en localStorage
    addConversion: (state, action) => {
      state.savedConversions.push(action.payload);
      localStorage.setItem(
        "savedConversions",
        JSON.stringify(state.savedConversions)
      );
    },
    // Elimina una conversión y actualiza localStorage
    removeConversion: (state, action) => {
      state.savedConversions = state.savedConversions.filter(
        (_, index) => index !== action.payload
      );
      localStorage.setItem(
        "savedConversions",
        JSON.stringify(state.savedConversions)
      );
    },
  },
});

export const { addConversion, removeConversion } = conversionsSlice.actions;
export default conversionsSlice.reducer;
