import { createAsyncThunk } from "@reduxjs/toolkit";
import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";
import tryCatch from "../helpers/tryCatch";
import type { CartState } from "./cart-slice";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchCartData = createAsyncThunk(
  "cart/fetchCartData",
  async (_, thunkAPI) => {
    const { response, error } = await tryCatch(fetch(`${API_URL}/cart.json`));

    if (error) {
      thunkAPI.dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: error.message,
        })
      );
      return;
    }

    const data = await response.json();

    thunkAPI.dispatch(cartActions.replaceCart(data));
  }
);

export const sendCartData = createAsyncThunk(
  "cart/sendCartData",
  async (cart: CartState, thunkAPI) => {
    thunkAPI.dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const cartData = { ...cart } as Partial<CartState>;
    delete cartData.changed;
    const { error } = await tryCatch(
      fetch(`${API_URL}/cart.json`, {
        method: "PUT",
        body: JSON.stringify(cartData),
      })
    );

    if (error) {
      thunkAPI.dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: error.message,
        })
      );
      return;
    }

    thunkAPI.dispatch(
      uiActions.showNotification({
        status: "success",
        title: "Success!",
        message: "Sent cart data successfully!",
      })
    );
  }
);
