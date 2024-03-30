import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    username: "",
    email: "",
  },
  isLoading: false,
  isAuth: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user.username = action.payload.user.username;
      state.user.email = action.payload.user.email;
      state.isLoading = false;
      state.isAuth = true;
    },
  },
});

export const authReducer = authSlice.reducer;
