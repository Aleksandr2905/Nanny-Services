import { createSlice } from "@reduxjs/toolkit";
import { getNannies } from "./operations";

const nanniesInitialState = {
  nannies: [],
  isLoadingNannies: false,
  error: "",
  currentPage: 0,
};

const nanniesSlice = createSlice({
  name: "nannies",
  initialState: nanniesInitialState,
  reducers: {
    setCurrentPage: (state) => {
      state.currentPage = state.currentPage + 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNannies.pending, (state) => {
        state.isLoadingNannies = true;
      })
      .addCase(getNannies.fulfilled, (state, action) => {
        state.isLoadingNannies = false;
        state.nannies = [...state.nannies, ...action.payload.data];
      })
      .addCase(getNannies.rejected, (state, action) => {
        state.isLoadingNannies = false;
        state.error = action.error.message;
      });
  },
});

export const { setCurrentPage } = nanniesSlice.actions;

export const nanniesReducer = nanniesSlice.reducer;
