import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../../features/AddName';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});