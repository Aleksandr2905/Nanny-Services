import { initialState } from "./reducer";

export const handlerPending = (state) => {
  state.isLoading = true;
  state.error = null;
};

export const handlerFulfilled = (state, { payload }) => {
  state.user = payload;
  state.isLoading = false;
  state.isAuth = true;
};

export const handlerRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload.message;
};

export const handlerLogOutFulfilled = (state) => {
  state.user = initialState.user;
  state.isAuth = false;
  state.isLoading = false;
};
