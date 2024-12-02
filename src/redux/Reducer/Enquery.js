import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: false,
  error: null,
};

export const enqueryReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("EnqueryRequest", (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    })
    .addCase("EnquerySuccess", (state) => {
      state.loading = false;
      state.success = true;
      state.error = null;
    })
    .addCase("EnqueryFail", (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    });
});
