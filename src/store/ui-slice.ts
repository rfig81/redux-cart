import { createSlice } from "@reduxjs/toolkit";

type Notification = {
  status: string;
  title: string;
  message: string;
};

interface UiState {
  cartIsVisible: boolean;
  notification: null | Notification;
}

const initialState: UiState = {
  cartIsVisible: false,
  notification: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
