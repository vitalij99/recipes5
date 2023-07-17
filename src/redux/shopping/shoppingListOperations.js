import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const shoppingListThunk = createAsyncThunk(
  '/recipes/shopping-list',
  async (_, { getState, rejectWithValue }) => {
    // console.log('we are trying to get shopping-list');
    const state = getState();
    const token = state.auth.token;

    try {
      setAuthHeader(token);
      const res = await axios.get('/shopping-list');
      // console.log(res);в
      return res.data;
    } catch (err) {
      if (err) {
        Notify.failure('Shopping-list not found!');
        return rejectWithValue(err.message);
      }
    }
  }
);

export const shoppingListRemoveItemThunk = createAsyncThunk(
  '/recipes/shopping-list/',
  async (id, { getState, rejectWithValue }) => {
    // console.log('we are trying to remove shopping-list item');
    const state = getState();
    const token = state.auth.token;

    try {
      setAuthHeader(token);
      await axios.delete(`/shopping-list/${id}`);
      return id;
    } catch (err) {
      if (err) {
        Notify.failure('Cant remove shopping-list item!');
        return rejectWithValue(err.message);
      }
    }
  }
);
