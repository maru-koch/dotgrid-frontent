import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../../api/routes/routes';

// Name of reducer
const name = 'auth';

const logInUser = createAsyncThunk(`${name}/login`, async (values) => {
  const res = await api.login(values);
  console.log(res.status_code);
  return res.data
});

const logOutUser = createAsyncThunk(`${name}/logout`, async () => {
  const res = await api.auth.logout();
  return res.data;
});

const initialState = { isAuthorized: false, loading: false, user: {} };

const authSlice = createSlice({
  name,
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
