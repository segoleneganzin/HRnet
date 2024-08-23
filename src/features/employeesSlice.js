import { createSlice } from '@reduxjs/toolkit';
import { getEmployees } from '../services/employeeAPI';
import { createThunkAction, handleAsyncActions } from './slicerFunctions';
import mockEmployees from '../../public/mockEmployees.json';

const GET_EMPLOYEES = 'employees/getEmployees';

export const getEmployeesAsync = createThunkAction(GET_EMPLOYEES, getEmployees);

export const employeesSlice = createSlice({
  name: 'employees',
  initialState: {
    employees: mockEmployees,
    status: 'idle',
    error: null,
  },
  reducers: {
    addEmployee: (state, action) => {
      const employees = [...state.employees, action.payload];
      state.employees = employees;
    },
  },
  extraReducers: (builder) => {
    handleAsyncActions(builder, getEmployeesAsync, 'employees');
  },
  selectors: {
    selectEmployees: (state) => state.employees,
    selectEmployeesStatus: (state) => state.status,
    selectEmployeesError: (state) => state.error,
  },
});

export const { addEmployee } = employeesSlice.actions;
export const { selectEmployees, selectEmployeesStatus, selectEmployeesError } =
  employeesSlice.selectors;

export default employeesSlice.reducer;
