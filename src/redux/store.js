import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { authReducer } from "./auth/reducer";
import { nanniesReducer } from "./nannies/reducer";
import { filterReducer } from "./filter/reducer";
import { favoriteReducer } from "./favorites/reducer";

const persistConfigUser = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["favoritesArray"],
};

export const store = configureStore({
  reducer: {
    user: authReducer,
    nannies: nanniesReducer,
    filter: filterReducer,
    favorites: persistReducer(persistConfigUser, favoriteReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
