import { createSlice } from '@reduxjs/toolkit';
import { getEmployees } from '../services/employeeAPI';
import {
  createThunkAction,
  handleAsyncActions,
} from '../utils/slicerFunctions';

const GET_EMPLOYEES = 'employees/getEmployees';

export const getEmployeesAsync = createThunkAction(GET_EMPLOYEES, getEmployees);

// Redux slice for profile state management
export const employeesSlice = createSlice({
  name: 'employees',
  initialState: {
    employees: JSON.parse(localStorage.getItem('employees')) || [],
    previousEmployees:
      JSON.parse(localStorage.getItem('previousEmployees')) || [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addEmployee: (state, action) => {
      const employees = [...state.employees, action.payload];
      localStorage.setItem('employees', JSON.stringify(employees));
      state.employees = employees;
    },
    setPreviousEmployees: (state) => {
      localStorage.setItem(
        'previousEmployees',
        JSON.stringify(state.employees)
      );
      state.previousEmployees = state.employees;
    },
  },
  extraReducers: (builder) => {
    // Extra reducers to handle async actions (getUserAccounts)
    handleAsyncActions(builder, getEmployeesAsync, 'employees', 'status');
  },
  selectors: {
    selectEmployees: (state) => state.employees,
    selectPreviousEmployees: (state) => state.employees,
    selectEmployeesStatus: (state) => state.status,
    selectEmployeesError: (state) => state.error,
  },
});

export const { addEmployee, setPreviousEmployees } = employeesSlice.actions;
export const {
  selectEmployees,
  selectPreviousEmployees,
  selectEmployeesStatus,
  selectEmployeesError,
} = employeesSlice.selectors;

export default employeesSlice.reducer;
