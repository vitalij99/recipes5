import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const searchTitleThunk = createAsyncThunk(
  'title',
  async (query, { getState, rejectWithValue }) => {
    // console.log('we are trying to get shopping-list');
    const state = getState();
    const token = state.auth.token;

    try {
      setAuthHeader(token);
      const res = await axios.get(`/recipes/search?title=${query}`);
      // console.log(res);
      return res.data;
    } catch (err) {
      if (err) {
        Notify.failure('Shopping-list not found!');
        return rejectWithValue(err.message);
      }
    }
  }
);

export const searchIngredientsThunk = createAsyncThunk(
  'ingredients',
  async (query, { getState, rejectWithValue }) => {
    // console.log('we are trying to get shopping-list');
    const state = getState();
    const token = state.auth.token;

    try {
      setAuthHeader(token);
      const res = await axios.get(`/recipes/ingredients?ingredients=${query}`);
      // console.log(res);
      return res.data;
    } catch (err) {
      if (err) {
        Notify.failure('Shopping-list not found!');
        return rejectWithValue(err.message);
      }
    }
  }
);
