import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  selectFilter: "",
  selectFavoriteFilter: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    setFilter: (state, action) => {
      if (action.payload) {
        state.selectFilter = action.payload.value;
      }
    },

    setFavoriteFilter: (state, action) => {
      if (action.payload) {
        state.selectFavoriteFilter = action.payload.value;
      }
    },
  },
});

export const { setFilter, setFavoriteFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
