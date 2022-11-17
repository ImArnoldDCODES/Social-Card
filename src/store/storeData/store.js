import { configureStore } from '@reduxjs/toolkit';
import AddName from '../../features/AddName';

export default configureStore({
  reducer: {
    names: AddName,
  },
});