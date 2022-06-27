import { configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {authReducer} from './reducer/auth/reducerSlice';

import { combineReducers } from '@reduxjs/toolkit';


const rootReducer = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer:{
      auth: rootReducer,
  }
})

export default store;

