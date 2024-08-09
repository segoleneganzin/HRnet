import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from '../features/employeesSlice';

const preloadedState = window.__PRELOADED_STATE__;

const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
  preloadedState,
});

export default store;
