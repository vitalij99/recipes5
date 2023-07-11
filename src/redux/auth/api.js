import axios from 'axios';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://yummy-service.onrender.com/';

const tokenOperation = {
  setToken: token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  clearToken: () => {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerApi = async (user, thunkAPI) => {
  const { data } = await axios.post('/users/register', user);

  try {
    tokenOperation.setToken(data.token);
    Notify.success('Registrated succesfully!');
    return data;
  } catch (error) {
    if (error.response && error.response.status === 409) {
      Notify.failure('Email already registered');
    } else {
      Notify.failure('Registration failed!');
    }
    return thunkAPI.rejectWithValue(error.message);
  }
};

export const signinApi = async (user, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', user);
    tokenOperation.setToken(data.token);
    Notify.success('Login sucess!');
    return data;
  } catch (error) {
    Notify.failure('Login failed!');
    return thunkAPI.rejectWithValue(error.message);
  }
};

export const logoutApi = async (_, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/logout');
    Notify.info('Logout');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};

export const currentApi = async (_, thunkAPI) => {
  const state = thunkAPI.getState();

  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    tokenOperation.setToken(persistedToken);
    const { data } = await axios.get('/users/current');

    return data;
  } catch (error) {
    Notify.info('Token is obsolete');
    return thunkAPI.rejectWithValue(error.message);
  }
};

export const updateName = async (newName, thunkAPI) => {
  try {
    const { data } = await axios.patch('/users/name', { name: newName });
    return data;
  } catch (error) {
    Notify.info('Failed to update the name');
    return thunkAPI.rejectWithValue(error.message);
  }
};
export const updateAvatar = async (formData, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/avatars', formData);

    return data;
  } catch (error) {
    Notify.info('failed to update the avatar');
    return thunkAPI.rejectWithValue(error.message);
  }
};
