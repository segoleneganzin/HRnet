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
import storage from 'redux-persist/lib/storage/session'; // sessionStorage
import employeesReducer from '../features/employeesSlice';
import departmentsReducer from '../features/departmentsSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['employees', 'departments'], // reducers to persist
};

// Create persist reducers
const persistedEmployeesReducer = persistReducer(
  persistConfig,
  employeesReducer
);
const persistedDepartmentsReducer = persistReducer(
  persistConfig,
  departmentsReducer
);
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

export const persistor = persistStore(store);

export default store;
