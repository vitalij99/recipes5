import { createSlice } from '@reduxjs/toolkit';
import { mainThunk } from './mainOperation';

const initialState = {
  recipes: [],
  isLoading: false,
  error: null,
};
const mainSlice = createSlice({
  name: 'main',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(mainThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(mainThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.recipes = action.payload;
      })
      .addCase(mainThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const mainReducer = mainSlice.reducer;
