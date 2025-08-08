import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // à créer aussi

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
