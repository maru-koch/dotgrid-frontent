import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducer/auth/reducerSlice';
import { combineReducers } from '@reduxjs/toolkit';

// for more than one reducer, use combine reducer

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer:{
      auth: rootReducer,
  }
})

export default store;

