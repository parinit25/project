import { createSlice } from "@reduxjs/toolkit";
import { getCartAction, getStockItemsAction } from "./asyncCartReducer";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    stockItems: [],
    cartItems: [],
    cartOpen: false,
  },
  reducers: {
    showCart(state) {
      state.cartOpen = true;
    },
    hideCart(state) {
      state.cartOpen = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(getStockItemsAction.fulfilled, (state, action) => {
      const response = action.payload;
      const itemArray = [];
      for (const key in response) {
        itemArray.push({
          key: key,
          name: response[key].name,
          amount: response[key].amount,
          quantity: response[key].quantity,
          description: response[key].description,
        });
      }
      state.stockItems = itemArray;
    });
    builder.addCase(getCartAction.fulfilled, (state, action) => {
      const response = action.payload;
      console.log(response);
      const cartArray = [];
      for (const key in response) {
        cartArray.push({
          key: key,
          name: response[key].name,
          amount: response[key].amount,
          quantity: response[key].quantity,
          description: response[key].description,
        });
      }
      state.cartItems = cartArray;
    });
  },
});
export default cartSlice;
export const cartAction = cartSlice.actions;
