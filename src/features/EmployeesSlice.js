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
    employees: JSON.parse(sessionStorage.getItem('employees')) || [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addEmployee: (state, action) => {
      const employees = [...state.employees, action.payload];
      sessionStorage.setItem('employees', JSON.stringify(employees));
      state.employees = employees;
    },
  },
  extraReducers: (builder) => {
    // Extra reducers to handle async actions (getUserAccounts)
    handleAsyncActions(builder, getEmployeesAsync, 'employees', 'status');
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
