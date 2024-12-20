import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: false,
  error: null,
  Details: {}, // Object, not array
};

export const DriverDetailReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("driverDetailRequest", (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    })
    .addCase("driverDetailSuccess", (state, action) => {
      state.loading = false;
      state.success = true;
      state.Details = action.payload?.data || {}; // Extract data object
      state.error = null;
    })
    .addCase("driverDetailFail", (state, action) => {
      state.loading = false;
      state.success = false;
      state.Details = {}; // Reset on failure
      state.error = action.payload;
    });
});
