import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiCartService } from "../services/apiCartServices";

export const addStockItemsAction = createAsyncThunk(
  "addStockItemsAction",
  async (data, thunkApi) => {
    const response = await apiCartService.addStockItems(data);
    setTimeout(() => {
      thunkApi.dispatch(getStockItemsAction());
    }, 1000);
  }
);
export const getStockItemsAction = createAsyncThunk(
  "getStockItemsAction",
  async () => {
    const response = await apiCartService.getStockItems();
    return response;
  }
);
export const postCartAction = createAsyncThunk(
  "postCartAction",
  async (cart) => {
    const response = await apiCartService.postCart(cart);
  }
);
export const getCartAction = createAsyncThunk("getCartAction",async() => {
    const response= await apiCartService.getCart();
    return response;
})
