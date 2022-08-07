import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducer/auth/reducerSlice';
import priceReducer from './reducer/price/priceSlice';
import {learMoreReducer} from './reducer/learnMoreSlice';

// // for more than one reducer, use combine reducer


const store = configureStore({
  reducer:{
      auth: authReducer,
      price: priceReducer,
      learnMore: learMoreReducer
  }
})

export default store;

