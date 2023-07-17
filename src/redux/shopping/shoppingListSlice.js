import { createSlice } from '@reduxjs/toolkit';
import {
  shoppingListThunk,
  shoppingListRemoveItemThunk,
} from './shoppingListOperations';

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
      })
      .addCase(shoppingListRemoveItemThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(shoppingListRemoveItemThunk.fulfilled, (state, { payload }) => {
        const index = state.shoppingList.findIndex(item => item.id === payload);
        state.shoppingList.splice(index, 1);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(shoppingListRemoveItemThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const shoppingListReducer = shoppingListSlice.reducer;
