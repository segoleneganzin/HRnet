import { configureStore } from '@reduxjs/toolkit';
import { vi } from 'vitest';
import employeesReducer from '../features/employeesSlice';
import departmentsReducer from '../features/departmentsSlice';

export const createTestStore = () => {
  const store = configureStore({
    reducer: {
      employees: employeesReducer,
      departments: departmentsReducer,
    },
  });

  return {
    ...store,
    dispatch: vi.fn(),
  };
};
