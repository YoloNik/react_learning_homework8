import { createSlice } from '@reduxjs/toolkit';
import {
  signupNewUser,
  getCurrentUser,
  LogInUser,
  LogOutUser,
} from './authOperation';

const initialState = {
  userData: {
    token: '',
    user: {
      name: '',
      email: '',
    },
  },
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'userData',
  initialState: initialState,
  reducers: '',
  extraReducers: builder => {
    builder
      .addCase(getCurrentUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        if (!action.payload) return;
        state.userData.user = action.payload;
        state.loading = false;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signupNewUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupNewUser.fulfilled, (state, action) => {
        state.userData.token = action.payload.token;
        state.userData.user = action.payload.user;
        state.loading = false;
      })
      .addCase(signupNewUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(LogInUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(LogInUser.fulfilled, (state, action) => {
        state.userData.token = action.payload.token;
        state.userData.user = action.payload.user;
        state.loading = false;
      })
      .addCase(LogInUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(LogOutUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(LogOutUser.fulfilled, (state, action) => {
        state.userData = initialState.userData;
      })
      .addCase(LogOutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
