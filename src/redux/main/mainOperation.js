import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

export const mainThunk = createAsyncThunk(
  '/recipes/main-page',

  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/recipes/main-page');
      return data;
    } catch (err) {
      if (err) {
        Notify.failure('Recipes not find!');
      }
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
