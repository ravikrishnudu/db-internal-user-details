import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice'; // Assuming you will have a data slice for managing the sheet data

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
