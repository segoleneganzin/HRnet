import { createSlice } from '@reduxjs/toolkit';
import { getEmployees } from '../services/employeeAPI';
import { createThunkAction, handleAsyncActions } from './slicerFunctions';
import mockEmployees from '../assets/mocks/mockEmployees.json';

const GET_EMPLOYEES = 'employees/getEmployees';

export const getEmployeesAsync = createThunkAction(GET_EMPLOYEES, getEmployees);

/**
 * Slice for managing the state of employees, including fetching employees and handling their status.
 *
 * @typedef {Object} EmployeesState
 * @property {Array} employees - Array of employees objects.
 * @property {string} status - The status of the fetch operation (e.g., 'idle', 'loading', 'succeeded', 'failed').
 * @property {string|null} error - Error message if the fetch operation fails; null otherwise.
 *
 * @typedef {Object} EmployeesSlice
 * @property {string} name - The name of the slicer.
 * @property {EmployeesState} initialState - The initial state of the employees slice.
 * @property {Object} reducers - Reducer functions.
 * @property {Object} extraReducers - Handlers for async actions and their states.
 * @property {Object} selectors - Selector functions to retrieve parts of the state.
 */
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
    /**
     * @returns {Array}
     */
    selectEmployees: (state) => state.employees,

    /**
     * @returns {string} (e.g., 'idle', 'loading', 'succeeded', 'failed').
     */
    selectEmployeesStatus: (state) => state.status,

    /**
     * @returns {string|null}
     */
    selectEmployeesError: (state) => state.error,
  },
});

export const { addEmployee } = employeesSlice.actions;
export const { selectEmployees, selectEmployeesStatus, selectEmployeesError } =
  employeesSlice.selectors;

export default employeesSlice.reducer;
