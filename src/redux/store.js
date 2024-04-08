import { configureStore } from '@reduxjs/toolkit';
import userLogedInReducer from './usersSlice';

const store = configureStore({
  reducer: {
    userLogedIn: userLogedInReducer,
  }
});

export default store;