import { createSlice } from '@reduxjs/toolkit';
import { categoriesThunk, categoriesListThunk } from './categoriesOperation';

const initialState = {
  items: [],
  recipes: [],
  isLoading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(categoriesThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(categoriesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.recipes = action.payload;
      })
      .addCase(categoriesThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(categoriesListThunk.fulfilled, (state, action) => {
        state.error = null;
        state.items = action.payload;
      })
      .addCase(categoriesListThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
