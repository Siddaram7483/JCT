// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // Adjust the path based on your structure

const store = configureStore({
  reducer: rootReducer,
});

export default store;
