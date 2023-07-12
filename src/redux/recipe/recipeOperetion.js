import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

export const fetchIngradients = createAsyncThunk(
  'ingredients/list',

  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`/ingredients/list`);
      return res.data;
    } catch (err) {
      if (err) {
        Notify.failure('Ingredients not find!');
      }
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addIngredientToShoppingList = createAsyncThunk(
  'user/shopping',
  async ({ id }, thunkAPI) => {
    try {
      const res = await axios.patch(`user/shopping`, {
        id,
      });
      if (res) {
        Notify.failure('Ingredient added on shoppingList');
      }
      return res;
    } catch (err) {
      if (err) {
        Notify.failure('Not found');
      }
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addRecipeToFavorite = createAsyncThunk(
  'user/favorites',
  async ({ id }, thunkAPI) => {
    try {
      const res = await axios.patch(`user/favorites`, {
        id,
      });
      if (res) {
        Notify.failure('Recipe added on favorites');
      }
      return res;
    } catch (err) {
      if (err) {
        Notify.failure('');
      }
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const getFavoriteRecipes = createAsyncThunk(
  'recipes/getFavoriteRecipes',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`user/favorites`);
      if (res) {
        Notify.failure('Favorite list uploaded successfully!');
      }
    } catch (err) {
      if (err) {
        Notify.failure(err.message);
      }
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const removeRecipeFromFavorit = createAsyncThunk(
  'recipes/removeRecipeFromFavorit',
  async ({ id }, thunkAPI) => {
    try {
      const res = await axios.patch(`user/favorites`, { id });
      if (res) {
        Notify.failure('Recipe remove success!');
      }
    } catch (err) {
      if (err) {
        Notify.failure(err.message);
      }
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
