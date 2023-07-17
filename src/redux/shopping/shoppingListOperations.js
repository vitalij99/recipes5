import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const shoppingListThunk = createAsyncThunk(
  '/recipes/shopping-list',
  async (_, { getState, rejectWithValue }) => {
    console.log('we are trying to get shopping-list');
    const state = getState();
    const token = state.auth.token;

    try {
      setAuthHeader(token);
      const res = await axios.get('/shopping-list');
      console.log(res.data.items);
      return res.data.items;
    } catch (err) {
      if (err) {
        Notify.failure('Shopping-list not found!');
        return rejectWithValue(err.message);
      }
    }
  }
);

// export const shoppingListAddThunk = createAsyncThunk(
//   '/recipes/shopping-list',

//   async ({ item }, { getState, rejectWithValue }) => {
//     const state = getState();
//     const token = state.auth.token;

//     if (token === null) {
//       return rejectWithValue('No token is available');
//     }

//     try {
//       const { data } = await axios.post('/shopping-list');
//       return data;
//     } catch (err) {
//       if (err) {
//         Notify.failure('Sopping-list not found!');
//       }
//       return rejectWithValue(err.message);
//     }
//   }
// );

// export const shoppingListDeleteThunk = createAsyncThunk(
//   '/recipes/shopping-list',

//   async (item, { getState, rejectWithValue }) => {
//     const state = getState();
//     const token = state.auth.token;

//     if (token === null) {
//       return rejectWithValue('No token is available');
//     }

//     try {
//       const { data } = await axios.post('/shopping-list', item);
//       return data;
//     } catch (err) {
//       if (err) {
//         Notify.failure('Sopping-list not found!');
//       }
//       return rejectWithValue(err.message);
//     }
//   }
// );
