import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, registration } from "./operations";
import {
  handlerFulfilled,
  handlerLogOutFulfilled,
  handlerPending,
  handlerRejected,
} from "./handlers";

export const initialState = {
  user: {
    id: "",
    username: "",
    email: "",
    token: "",
  },
  isLoading: false,
  isAuth: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registration.pending, handlerPending)
      .addCase(registration.fulfilled, handlerFulfilled)
      .addCase(registration.rejected, handlerRejected)
      .addCase(logIn.pending, handlerPending)
      .addCase(logIn.fulfilled, handlerFulfilled)
      .addCase(logIn.rejected, handlerRejected)
      .addCase(logOut.pending, handlerPending)
      .addCase(logOut.fulfilled, handlerLogOutFulfilled)
      .addCase(logOut.rejected, handlerRejected)
      .addCase(refreshUser.pending, handlerPending)
      .addCase(refreshUser.fulfilled, handlerFulfilled)
      .addCase(refreshUser.rejected, handlerRejected);
  },
});

export const authReducer = authSlice.reducer;
