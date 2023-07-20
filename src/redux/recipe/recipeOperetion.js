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

export const addRecipeToFavorite = createAsyncThunk(
  'favorite/add',
  async (id, thunkAPI) => {
    try {
      const res = await axios.patch(`favorite/add/${id}`);
      if (res) {
        Notify.success('Recipe added on favorites');
      }
      return id;
    } catch (err) {
      if (err) {
        Notify.failure(err.message);
      }
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const removeRecipeToFavorite = createAsyncThunk(
  'favorite/delete',
  async (id, thunkAPI) => {
    try {
      const res = await axios.patch(`favorite/delete/${id}`);
      if (res) {
        Notify.success('Recipe delete from favorites successful!');
      }
      return id;
    } catch (err) {
      if (err) {
        Notify.failure(err.message);
      }
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const getFavoriteRecipes = createAsyncThunk(
  'recipes/getFavoriteRecipes',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/favorite`);
      return data;
    } catch (err) {
      if (err) {
        Notify.failure(err.message);
      }
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchShoppingList = createAsyncThunk(
  'shopping-list/fetchShoppingList',

  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/shopping-list`);
      const { items, _id } = data;
      return { ...items, _id };
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addShoppingList = createAsyncThunk(
  'shopping-list/addShoppingList',
  async (ingradient, thunkAPI) => {
    try {
      const { data } = await axios.post(`/shopping-list`, ingradient);
      const { item } = data;
      if (data) {
        Notify.success('Ingredient added on shoppingList');
      }
      const val = { ...ingradient, item };
      return val;
    } catch (err) {
      if (err) {
        Notify.failure('Not found');
      }
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const removeShoppingList = createAsyncThunk(
  'shopping-list/removeShoppingList',
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`/shopping-list/${id}`);
      if (res) {
        Notify.success('Ingredient delete successful');
      }
      return id;
    } catch (err) {
      if (err) {
        Notify.failure('Not found');
      }
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
