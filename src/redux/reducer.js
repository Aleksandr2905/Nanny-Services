import { createSlice } from "@reduxjs/toolkit";
import { registration } from "./operations";

const initialState = {
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
    builder.addCase(registration.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isAuth = true;
    });
  },
});

export const authReducer = authSlice.reducer;
