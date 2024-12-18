import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: false,
  error: null,
};

export const hireDriverReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("HireDriverRequest", (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    })
    .addCase("HireDriverSuccess", (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
    })
    .addCase("HireDriverFailure", (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    });
});
