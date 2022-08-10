import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducer/auth/reducerSlice';
import priceReducer from './reducer/price/priceSlice';
import learMoreReducer from './reducer/learnMoreSlice';
import applianceReducer from './reducer/applianceReducer';

// // for more than one reducer, use combine reducer


const store = configureStore({
  reducer:{
      auth: authReducer,
      price: priceReducer,
      learnMore: learMoreReducer,
      appliance: applianceReducer
  }
})

export default store;

