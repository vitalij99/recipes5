import { createSlice } from '@reduxjs/toolkit';
import {
  addRecipeToFavorite,
  addShoppingList,
  fetchIngradients,
  getFavoriteRecipes,
  removeRecipeToFavorite,
  removeShoppingList,
  // removeShoppingList,
} from './recipeOperetion';

const initialState = {
  shoppingList: [],
  ingradients: [],
  favorite: [],
  isLoading: false,
  error: null,
  operetion: null,
};
const ownerRecipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {},
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
      .addCase(addRecipeToFavorite.pending, state => {
        state.isLoading = true;
        state.operetion = 'addFavorite';
      })
      .addCase(addRecipeToFavorite.fulfilled, (state, { payload }) => {
        state.operetion = null;
        const id = payload;
        state.isLoading = false;
        state.error = null;
        state.favorite.push({ id });
      })
      .addCase(addRecipeToFavorite.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.operetion = null;
        state.error = payload;
      })
      .addCase(removeRecipeToFavorite.pending, state => {
        state.operetion = 'removeFavorite';
        state.isLoading = true;
      })
      .addCase(removeRecipeToFavorite.fulfilled, (state, { payload }) => {
        const id = payload;
        state.operetion = null;
        state.isLoading = false;
        state.error = null;
        const index = state.favorite.findIndex(vel => vel.id === id);
        state.favorite.splice(index, 1);
      })
      .addCase(removeRecipeToFavorite.rejected, (state, { payload }) => {
        state.operetion = null;
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getFavoriteRecipes.pending, state => {
        state.isLoading = true;
      })
      .addCase(getFavoriteRecipes.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.favorite = payload.map(item => ({ ...item, id: item._id }));
      })
      .addCase(getFavoriteRecipes.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addShoppingList.pending, state => {
        state.operetion = 'addShoppingList';
        state.isLoading = true;
      })
      .addCase(addShoppingList.fulfilled, (state, { payload }) => {
        state.operetion = null;
        state.isLoading = false;
        state.error = null;
        state.shoppingList.push(payload);
      })
      .addCase(addShoppingList.rejected, (state, { payload }) => {
        state.operetion = null;
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(removeShoppingList.pending, state => {
        state.operetion = 'removeShoppingList';
        state.isLoading = true;
      })
      .addCase(removeShoppingList.fulfilled, (state, { payload }) => {
        state.operetion = null;
        state.isLoading = false;
        state.error = null;
        const index = state.shoppingList.findIndex(vel => vel.item === payload);
        state.shoppingList.splice(index, 1);
      })
      .addCase(removeShoppingList.rejected, (state, { payload }) => {
        state.operetion = null;
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const ownerRecipeReducer = ownerRecipeSlice.reducer;
