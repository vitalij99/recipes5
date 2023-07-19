import { createSlice } from '@reduxjs/toolkit';
import { searchIngredientsThunk, searchTitleThunk } from './searchOperations';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchResults: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(searchTitleThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(searchTitleThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.searchResults = payload;
      })
      .addCase(searchTitleThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(searchIngredientsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(searchIngredientsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.searchResults = payload;
      })
      .addCase(searchIngredientsThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const searchReducer = searchSlice.reducer;
