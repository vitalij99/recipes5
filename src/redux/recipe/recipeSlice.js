import { createSlice } from '@reduxjs/toolkit';
import { fetchIngradients } from './recipeOperetion';

const initialState = {
  ingradients: [],
  isLoading: false,
  error: null,
};
const ownerRecipeSlice = createSlice({
  name: 'recipes',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchIngradients.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchIngradients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.ingradients = action.payload;
      })
      .addCase(fetchIngradients.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const ownerRecipeReducer = ownerRecipeSlice.reducer;
