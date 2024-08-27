import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage/session'; // Uses sessionStorage for persistent storage
import employeesReducer from '../features/employeesSlice';
import departmentsReducer from '../features/departmentsSlice';

/**
 * Configuration for persisting the employees state.
 * @type {Object}
 * @property {string} key - The key under which the employees state is stored in sessionStorage.
 * @property {Storage} storage - The storage engine to use (sessionStorage).
 */
const employeesPersistConfig = {
  key: 'employees',
  storage,
};

/**
 * Configuration for persisting the departments state.
 * @type {Object}
 * @property {string} key - The key under which the departments state is stored in sessionStorage.
 * @property {Storage} storage - The storage engine to use (sessionStorage).
 */
const departmentsPersistConfig = {
  key: 'departments',
  storage,
};

// Create persisted reducers for employees and departments
const persistedEmployeesReducer = persistReducer(
  employeesPersistConfig,
  employeesReducer
);
const persistedDepartmentsReducer = persistReducer(
  departmentsPersistConfig,
  departmentsReducer
);

/**
 * Configures the Redux store with the persisted reducers and custom middleware.
 * The store combines the employees and departments reducers, both of which
 * are persisted separately in sessionStorage.
 *
 * The middleware is customized to ignore specific redux-persist actions during
 * the serializable check.
 */
const store = configureStore({
  reducer: {
    employees: persistedEmployeesReducer,
    departments: persistedDepartmentsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

/**
 * Persistor object used to control persistence operations, such as rehydration and purging.
 */
export const persistor = persistStore(store);

export default store;
