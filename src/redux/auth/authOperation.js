import { createAsyncThunk } from '@reduxjs/toolkit';
import { signinApi, logoutApi, registerApi } from './api';

export const registerThunk = createAsyncThunk('auth/singup', user => {
  return registerApi(user);
});
export const signinThunk = createAsyncThunk('auth/signin', id => {
  return signinApi(id);
});
export const logoutThunk = createAsyncThunk('auth/logout', () => {
  return logoutApi();
});