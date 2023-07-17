import { createSlice } from '@reduxjs/toolkit';
import { getMyRecipes,removeMyRecipe } from './myRecipeOperations';
const initialState = {
  recipes: [],
  isLoading: false,
  error: null,
};
const myRecipeSlice = createSlice({
  name: 'myrecipes',
  initialState:initialState,
  reducers: {
    removeMyRecipe: {
      reducer: (state, { payload }) => {
        const index = state.recipes.findIndex(vel => vel.id === payload.id);
        state.recipes.splice(index, 1);
      },
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getMyRecipes.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getMyRecipes.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.recipes = payload;
      })
      .addCase(getMyRecipes.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(removeMyRecipe.pending, state => {
        state.isLoading = true;
      })
      .addCase(removeMyRecipe.fulfilled, (state, { payload }) => {
        const id = payload;
        state.isLoading = false;
        state.error = null;
        const index = state.recipes.findIndex(vel => vel.id === id);
        state.recipes.splice(index, 1);
      })
      .addCase(removeMyRecipe.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
  },
});

export const myRecipeReducer = myRecipeSlice.reducer;
