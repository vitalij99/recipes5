import { createSlice } from '@reduxjs/toolkit';
import { getMyRecipes } from './myRecipeOperations';
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
  },
});

export const myRecipeReducer = myRecipeSlice.reducer;
export const {
    removeMyRecipe,
} = myRecipeSlice.actions;
