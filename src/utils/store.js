import { configureStore } from '@reduxjs/toolkit';
import employeesReducer, {
  employeesInitialState,
} from '../features/employeesSlice';
import departmentsReducer, {
  departmentsInitialState,
} from '../features/departmentsSlice';

// Load persisted state or use mock data if not available
const persistedState = JSON.parse(sessionStorage.getItem('reduxState')) || {
  employees: employeesInitialState,
  departments: departmentsInitialState,
};

const store = configureStore({
  reducer: {
    employees: employeesReducer,
    departments: departmentsReducer,
  },
  preloadedState: persistedState,
});

// Save state to sessionStorage whenever it changes
// permitted data persistence
store.subscribe(() => {
  try {
    sessionStorage.setItem('reduxState', JSON.stringify(store.getState()));
  } catch (err) {
    console.error('Failed to save state to sessionStorage:', err);
  }
});

export default store;
