import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setAuthorizationHeader, removeAuthorizationHeader } from "../../../api/routes/index"

import api from '../../../api/routes/routes';

// Name of reducer
const name = 'auth';
const initialState = { isAuthorized: false, loading: false, user: {} };

// logs in the user
// the url here is reduntant; code works fine without it.
const logInUser = createAsyncThunk(`${name}/login`, async (values) => {
  const res = await api.login(values)
  setAuthorizationHeader(res.data.access);
});

// logout current user
const logOutUser = createAsyncThunk(`${name}/logout`, async () => {
  await api.logout();
  removeAuthorizationHeader()
});


const authSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    signUpUser:(state, action)=>{
      console.log("REDUCER ACTION", action.payload)
      api.signUp(action.payload)
    },
    addDevice:()=>{},
    assignDevice:()=>{},
    removeDevice:()=>{},
    generateData:()=>{},
    analyzeData:()=>{},
    removeUser:()=>{},
    updateUser:()=>{},
    getAllUsers:()=>{},

  },
  extraReducers: (builder) => {
      builder
        .addCase(logInUser.fulfilled, (state, action) => {
          state.isAuthorized = true;
          state.loading = false;
          state.user = action.payload;
        })
        .addCase(logInUser.pending, (state) => {
          state.loading = true;
          state.isAuthorized = false;
        })
        .addCase(logInUser.rejected, (state) => {
          state.loading = false;
        })
        .addCase(logOutUser.fulfilled, (state) => {
          state.isAuthorized = false;
          state.loading = false;
          state.user = {};
        });
    },
});

export const AUTH_ACTIONS = { ...authSlice.actions, logInUser, logOutUser };

export default authSlice.reducer;
