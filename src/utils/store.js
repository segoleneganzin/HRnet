import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from '../features/EmployeesSlice';

const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
});

export default store;
