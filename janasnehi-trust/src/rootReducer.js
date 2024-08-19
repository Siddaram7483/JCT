// src/rootReducer.js

import { combineReducers } from 'redux';
import counterReducer from './counterSlice'; // Adjust the path based on your structure

const rootReducer = combineReducers({
  counter: counterReducer,
  // Add more reducers here if needed
});

export default rootReducer;
