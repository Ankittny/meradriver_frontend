import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: false,
  error: null,
  Details: [],
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
      state.Details = action.payload?.data || []; // Extract nested data array
      state.error = null;
    })
    .addCase("driverDetailFail", (state, action) => {
      state.loading = false;
      state.success = false;
      state.jobs = []; // Reset jobs on failure
      state.error = action.payload;
    });
});
