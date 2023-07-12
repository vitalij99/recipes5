import { createSlice } from '@reduxjs/toolkit';
import {
  addIngredientToShoppingList,
  fetchIngradients,
} from './recipeOperetion';

const initialState = {
  shoppingList: [],
  ingradients: [],
  isLoading: false,
  error: null,
};
const ownerRecipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    addShoppingList: {
      reducer: (state, { payload }) => {
        state.shoppingList.push(payload);
      },
    },
    removeShoppingList: {
      reducer: (state, { payload }) => {
        const index = state.shoppingList.findIndex(
          vel => vel.id === payload.id
        );
        state.shoppingList.splice(index, 1);
      },
    },
  },
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
      })
      .addCase(addIngredientToShoppingList.pending, state => {
        state.isLoading = true;
      })
      .addCase(addIngredientToShoppingList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.ingradients = action.payload;
      })
      .addCase(addIngredientToShoppingList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const ownerRecipeReducer = ownerRecipeSlice.reducer;
export const { addShoppingList, removeShoppingList } = ownerRecipeSlice.actions;
