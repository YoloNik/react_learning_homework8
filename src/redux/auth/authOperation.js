import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

//const MAIN_URL = process.env.MAIN_URL;

const MAIN_URL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

const getCurrentUser = createAsyncThunk(
  'users/current',
  async (_, thunkApi) => {
    const persistedToken = thunkApi.getState().auth.userData.token;
    token.set(persistedToken);
    if (!persistedToken) return;
    try {
      const { data } = await axios.get(`${MAIN_URL}/users/current`);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
);

const signupNewUser = createAsyncThunk('users/signup', async userData => {
  try {
    const { data } = await axios.post(`${MAIN_URL}/users/signup`, userData);
    token.set(data.token);
    toast.success(`Hi ${data.user.name}. We glad to see you!`);
    return data;
  } catch (error) {
    toast.error(error.response.statusText);
  }
});

const LogInUser = createAsyncThunk('users/login', async userData => {
  try {
    const { data } = await axios.post(`${MAIN_URL}/users/login`, userData);
    token.set(data.token);
    toast.success(`Welcome ${data.user.name}`);
    return data;
  } catch (error) {
    toast.error(error.response.statusText);
  }
});

const LogOutUser = createAsyncThunk('users/logout', async (_, thunkApi) => {
  try {
    const persistedToken = thunkApi.getState().auth.userData.token;
    if (!persistedToken) return;
    const { data } = await axios.post(
      `${MAIN_URL}/users/logout`,
      persistedToken,
    );
    token.unset();
    toast('We will glad to see you soon');
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
});

export { signupNewUser, getCurrentUser, LogInUser, LogOutUser };