import { createSlice } from '@reduxjs/toolkit';
import {
  signupNewUser,
  getCurrentUser,
  LogInUser,
  LogOutUser,
} from './authOperation';

interface initialStateTyps {
  userData: {
    token: string,
    user: {
      name: string,
      email: string,
    },
  },
  loading: boolean,
};

const initialState:any = {
  userData: {
    token: '',
    user: {
      name: '',
      email: '',
    },
  },
  loading: false,
};

const authSlice = createSlice({
  name: 'userData',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCurrentUser.pending, state => {
        state.loading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        if (!payload) return;
        state.userData.user = payload;
        state.loading = false;
      })
      .addCase(getCurrentUser.rejected, state => {
        state.loading = false;
      })
      .addCase(signupNewUser.pending, state => {
        state.loading = true;
      })
      .addCase(signupNewUser.fulfilled, (state, { payload }) => {
        if (!payload.token) return;
        state.userData.token = payload.token;
        state.userData.user = payload.user;
        state.loading = false;
      })
      .addCase(signupNewUser.rejected, state => {
        state.loading = false;
      })
      .addCase(LogInUser.pending, state => {
        state.loading = true;
      })
			.addCase(LogInUser.fulfilled, (state, { payload }) => {
				 if (payload.token === undefined) return;
        state.userData.token = payload.token;
        state.userData.user = payload.user;
        state.loading = false;
      })
      .addCase(LogInUser.rejected, state => {
        state.loading = false;
      })
      .addCase(LogOutUser.pending, state => {
        state.loading = true;
      })
      .addCase(LogOutUser.fulfilled, state => {
        state.userData = initialState.userData;
      })
      .addCase(LogOutUser.rejected, state => {
        state.loading = false;
      });
  },
});

export default authSlice.reducer;
