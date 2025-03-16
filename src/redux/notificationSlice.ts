import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Variant } from "react-bootstrap/esm/types";

interface NotificationState {
  message: string;
  type: Variant;
  isVisible: boolean;
  dismissible?: boolean;
  dismissAfter?: number;
}

const initialState: NotificationState = {
  message: "",
  type: "info",
  isVisible: false,
  dismissible: false,
  dismissAfter: 8,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification: (
      state,
      action: PayloadAction<{
        message: string;
        type: Variant;
        dismissible?: boolean;
        dismissAfter?: number;
      }>
    ) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
      state.isVisible = true;
      state.dismissible = action.payload.dismissible;
      state.dismissAfter = action.payload.dismissAfter;
    },
    hideNotification: (state) => initialState,
  },
});

export const { showNotification, hideNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
