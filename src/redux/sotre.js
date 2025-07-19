// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../redux/uthSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
