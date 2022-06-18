import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducer/auth/authSlice';

const store = configureStore({
  reducer:{auth:rootReducer},
  
});


export default store;
