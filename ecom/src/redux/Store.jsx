import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartSlice.js"

import productSlice from "./productSlice.js"

const Store = configureStore({
  reducer : {
    cart : cartSlice,
    product : productSlice
  }
})

export default Store;