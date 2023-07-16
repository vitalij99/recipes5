import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  signinThunk,
  logoutThunk,
  registerThunk,
  currentThunk,
  updateAvatarThunk,
  updateNameThunk,
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
    createdAt: null,
  },
  token: null,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const arrThunks = [
  registerThunk,
  signinThunk,
  logoutThunk,
  currentThunk,
  updateAvatarThunk,
  updateNameThunk,
];

const fn = type => arrThunks.map(el => el[type]);

const handleIsLoggedIn = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
};
const handleLogout = state => {
  state.user = initialState.user;
  state.token = initialState.token;
};
const handleIsCurrent = (state, { payload }) => {
  state.user = payload.user;
};
const handleIsRejected = (state, { payload }) => {
  state.token = initialState.token;
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
const handleUpdateName = (state, { payload }) => {
  state.user.name = payload.name;
};
const handleUpdateAvatar = (state, { payload }) => {
  state.user.avatar = payload;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder
      .addCase(registerThunk.fulfilled, handleIsLoggedIn)
      .addCase(signinThunk.fulfilled, handleIsLoggedIn)
      .addCase(currentThunk.fulfilled, handleIsCurrent)
      .addCase(currentThunk.rejected, handleIsRejected)
      .addCase(logoutThunk.pending, handleLogout)
      .addCase(updateNameThunk.fulfilled, handleUpdateName)
      .addCase(updateAvatarThunk.fulfilled, handleUpdateAvatar)
      .addMatcher(isAnyOf(...fn(PENDING)), handlePending)
      .addMatcher(isAnyOf(...fn(REJECTED)), handleRejected)
      .addMatcher(isAnyOf(...fn(FULFILLED)), handleFulfilled);
  },
});

export const authReducer = authSlice.reducer;
