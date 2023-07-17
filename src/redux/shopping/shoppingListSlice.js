import { createSlice } from '@reduxjs/toolkit';
import { shoppingListThunk } from './shoppingListOperations';

const shoppingListSlice = createSlice({
  name: 'shopping',
  initialState: {
    shoppingList: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(shoppingListThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(shoppingListThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.shoppingList = payload;
      })
      .addCase(shoppingListThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const shoppingListReducer = shoppingListSlice.reducer;
