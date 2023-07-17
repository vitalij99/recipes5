import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

export const getMyRecipes = createAsyncThunk(
  'myrecipes/getMyRecipe',
  async (_, thunkAPI) => {
    try {
      const {data} = await axios.get(`recipes/own-recipes`);
        console.log(data)
        return data;
    } catch (err) {
      if (err) {
        Notify.failure(err.message);
      }
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const removeMyRecipe = createAsyncThunk(
  'myrecipes/deleteMyRecipe',
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`recipes/own-recipes/${id}`);
      if (res) {
        Notify.success('Recipe delete success!');
      }
    } catch (err) {
      if (err) {
        Notify.failure(err.message);
      }
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
