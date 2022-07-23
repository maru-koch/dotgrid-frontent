import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setAuthorizationHeader, removeAuthorizationHeader } from "../../../api/routes/index"
import {toast} from 'react-toastify'
import api from '../../../api/routes/routes';

// Name of reducer
const name = 'auth';
const initialState = { isAuthorized: false, loading: false, user: {} };

// logs in the user
// the url here is reduntant; code works fine without it.
const logInUser = createAsyncThunk(`${name}/login`, async (values) => {
  const res = await api.login(values)
  setAuthorizationHeader(res.data.access);
  return res.data.user
});

// logout current user
export const logOutUser = createAsyncThunk(`${name}/logout`, async (x) => {
  removeAuthorizationHeader()
});

export const subscribe = createAsyncThunk(`${name}/subscribe`, async (email)=>{
    const res = api.subscribe(email)
    return res
});

const authSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    signUpUser:(state, action)=>{
      console.log("REDUCER ACTION", action.payload)
      api.signUp(action.payload)
    },

    verifyEmail:(state, action)=>{
      // verify the user email address
      const enconded_email = action.payload
      api.verifyEmail(enconded_email)
      console.log(enconded_email)
    },
    
    addDevice:()=>{},
    assignDevice:()=>{},
    removeDevice:()=>{},
    generateData:()=>{},
    analyzeData:()=>{},
    removeUser:()=>{},
    updateUser:()=>{},
    logInUser:()=>{
      console.log('fakehit')
    },
    getAllUsers:()=>{},

  },
  extraReducers: (builder) => {
      builder
        .addCase(logInUser.fulfilled, (state, action) => {
          state.isAuthorized = true;
          state.loading = false; 
          // whatever thing that's being returned from logInUser
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
        })
        // Handling email subscribtion response
        .addCase(subscribe.fulfilled, (state, action)=>{
          toast.success(action.payload)
        })
        .addCase(subscribe.pending, (state, action)=>{
          toast.warning(action.payload)
        })
        .addCase(subscribe.rejected, (state, action)=>{
          toast.error(action.payload)
        });
    },
});

export const AUTH_ACTIONS = { ...authSlice.actions, logInUser, logOutUser, subscribe};

export default authSlice.reducer;
