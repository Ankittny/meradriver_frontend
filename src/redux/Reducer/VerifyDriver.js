import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: false,
  error: null,
  jobs: [], // Ensure jobs is initialized as an array
};

export const verifyDriverReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("verifyDriverRequest", (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    })
    .addCase("verifyDriverSuccess", (state, action) => {
      state.loading = false;
      state.success = true;
      state.jobs = action.payload?.data || []; // Extract nested data array
      state.error = null;
    })
    .addCase("verifyDriverFail", (state, action) => {
      state.loading = false;
      state.success = false;
      state.jobs = []; // Reset jobs on failure
      state.error = action.payload;
    });
});
