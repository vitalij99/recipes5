import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/';

const tokenOperation = {
  setToken: token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  clearToken: () => {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerApi = async (user, thunkAPI) => {
  try {
    const { data } = await axios.post('/auth/register', user);
    tokenOperation.setToken(data.token);

    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
};
export const signinApi = async (user, thunkAPI) => {
  try {
    const { data } = await axios.post('/auth/signin', user);
    tokenOperation.setToken(data.token);

    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
};
export const logoutApi = async (_, thunkAPI) => {
  try {
    const { data } = await axios.post('/auth/logout');

    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
};
