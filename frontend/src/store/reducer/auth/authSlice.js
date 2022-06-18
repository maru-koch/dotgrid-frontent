import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from 'apis/routes';

const name = 'authentication';

const authUser = createAsyncThunk(`${name}/login`, async (values) => {
  const res = await api.auth.login(values);
  return res.data;
});

const initialState = { isAuthorized: false, loading: false, user: {} };

const authSlice = createSlice({
  name,
  initialState,

  reducers: {
    logoutUser: (state) => {
      api.auth.logout();
      state.isAuthorized = false;
      state.loading = false;
      state.user = {};
    },

    extraReducers: (builder) => {
      builder
        .addCase(authUser.fulfilled, (state, action) => {
          state.isAuthorized = true;
          state.loading = false;
          state.user = action.payload;
        })
        .addCase(authUser.pending, (state) => {
          state.loading = true;
        })
        .addCase(authUser.rejected, (state) => {
          state.loading = false;
        });
    },
  },
});

export const AUTH_ACTIONS = { ...authSlice.actions, authUser };

export default authSlice.reducer;
