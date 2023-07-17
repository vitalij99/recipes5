import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

export const categoriesListThunk = createAsyncThunk(
  '/recipes/category-list',

  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/recipes/category-list');
      return res.data;
    } catch (err) {
      if (err) {
        Notify.failure('Recipes not find!');
      }
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const categoriesThunk = createAsyncThunk(
  '/recipes/categories/{category}',

  async (category, thunkAPI) => {
    try {
      const res = await axios.get(`/recipes/categories/${category}`);
      return res.data;
    } catch (err) {
      if (err) {
        Notify.failure('Recipes not find!');
      }
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
