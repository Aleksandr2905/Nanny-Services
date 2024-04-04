import { createSlice } from "@reduxjs/toolkit";
import {
  addFavoriteNannies,
  fetchUserFavorites,
  removeFavoriteNannies,
} from "./operations";

const favoritesInitialState = {
  favoritesArray: [],
  loading: false,
  error: "",
};

const handlePendingAction = (state) => {
  state.loading = true;
  state.error = "";
};

const handleRejectedAction = (state, action) => {
  state.loading = false;
  state.error = action.payload?.message;
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: favoritesInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addFavoriteNannies.pending, handlePendingAction)
      .addCase(addFavoriteNannies.fulfilled, (state, action) => {
        state.loading = false;
        state.favoritesArray.push(action.payload);
      })
      .addCase(addFavoriteNannies.rejected, handleRejectedAction)

      .addCase(removeFavoriteNannies.pending, handlePendingAction)
      .addCase(removeFavoriteNannies.fulfilled, (state, action) => {
        state.loading = false;
        state.favoritesArray = state.favoritesArray.filter(
          (nannies) => nannies.name !== action.payload.name
        );
      })
      .addCase(removeFavoriteNannies.rejected, handleRejectedAction)

      .addCase(fetchUserFavorites.pending, handlePendingAction)
      .addCase(fetchUserFavorites.fulfilled, (state, action) => {
        state.loading = false;
        state.favoritesArray = action.payload.data;
      })
      .addCase(fetchUserFavorites.rejected, handleRejectedAction);
  },
});

export const favoriteReducer = favoritesSlice.reducer;
