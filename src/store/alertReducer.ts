import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AlertProps } from "components/AlertDialog/AlertDialog";

const initialState: AlertProps = {
  title: null,
  content: null,
  submit: undefined,
  deny: undefined,
  submitButtonText: undefined,
  denyButtonText: undefined,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert(state, action: PayloadAction<AlertProps>) {
      state.title = action.payload.title;
      state.content = action.payload.content;
      state.submit = action.payload.submit ? action.payload.submit : undefined;
      state.deny = action.payload.deny ? action.payload.deny : undefined;
      state.submitButtonText = action.payload.submitButtonText
        ? action.payload.submitButtonText
        : undefined;
      state.denyButtonText = action.payload.denyButtonText
        ? action.payload.denyButtonText
        : undefined;
    },
    clearAlert(state) {
      state.title = null;
      state.content = null;
      state.submit = undefined;
      state.deny = undefined;
      state.submitButtonText = undefined;
      state.denyButtonText = undefined;
    },
  },
});

export const { setAlert, clearAlert } = alertSlice.actions;

export default alertSlice.reducer;
