import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducer/auth/reducerSlice';
import priceReducer from './reducer/price/priceSlice';

// // for more than one reducer, use combine reducer


const store = configureStore({
  reducer:{
      auth: authReducer,
      price: priceReducer
  }
})

export default store;

