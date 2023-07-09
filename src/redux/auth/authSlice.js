import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  signinThunk,
  logoutThunk,
  registerThunk,
  cuttentThunk,
} from './authOperation';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const initialState = {
  user: {
    name: null,
    email: null,
    avatar: null,
    favorite: null,
    shoppingList: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};
const arrThunks = [registerThunk, signinThunk, logoutThunk, cuttentThunk];

const fn = type => arrThunks.map(el => el[type]);

const handleIsLoggedIn = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};
const handleLogout = state => {
  state.user = initialState.user;
  state.token = initialState.token;
  state.isLoggedIn = false;
};

const handlePending = state => {
  state.isLoading = true;
};
const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder
      .addCase(registerThunk.fulfilled, handleIsLoggedIn)
      .addCase(signinThunk.fulfilled, handleIsLoggedIn)
      .addCase(cuttentThunk.fulfilled, handleIsLoggedIn)
      .addCase(logoutThunk.pending, handleLogout)
      .addMatcher(isAnyOf(...fn(PENDING)), handlePending)
      .addMatcher(isAnyOf(...fn(REJECTED)), handleRejected)
      .addMatcher(isAnyOf(...fn(FULFILLED)), handleFulfilled);
  },
});

export const authReducer = authSlice.reducer;
