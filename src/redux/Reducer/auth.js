import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: null,
  error: null,
};

export const driverRegisterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("driverRegisterRequest", (state) => {
      state.loading = true;
      state.success = null;
      state.error = null;
    })
    .addCase("driverRegisterSuccess", (state, action) => {
      state.loading = false;
      state.success = action.payload;
      state.error = null;
    })
    .addCase("driverRegisterFail", (state, action) => {
      state.loading = false;
      state.success = null;
      state.error = action.payload;
    });
});
