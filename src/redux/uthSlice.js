// src/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    plan: 'free', // Example default values
    wordsUsed: 0,
    wordsLimit: 1000,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    updateWordsUsed(state, action) {
      state.user.wordsUsed = action.payload;
    },
  },
});

export const { setUser, updateWordsUsed } = authSlice.actions;
export default authSlice.reducer;