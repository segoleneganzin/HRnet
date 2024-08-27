import { createSlice } from '@reduxjs/toolkit';
import { getDepartments } from '../services/departmentAPI';
import { createThunkAction, handleAsyncActions } from './slicerFunctions';
import mockDepartments from '../assets/mocks/mockDepartments.json';

const GET_DEPARTMENTS = 'employees/getDepartments';

export const getDepartmentsAsync = createThunkAction(
  GET_DEPARTMENTS,
  getDepartments
);

/**
 * Slice for managing the state of departments, including fetching departments and handling their status.
 *
 * @typedef {Object} DepartmentsState
 * @property {Array} departments - Array of department objects.
 * @property {string} status - The status of the fetch operation (e.g., 'idle', 'loading', 'succeeded', 'failed').
 * @property {string|null} error - Error message if the fetch operation fails; null otherwise.
 *
 * @typedef {Object} DepartmentsSlice
 * @property {string} name - The name of the slicer.
 * @property {DepartmentsState} initialState - The initial state of the departments slice.
 * @property {Object} reducers - Reducer functions (none are defined in this case).
 * @property {Object} extraReducers - Handlers for async actions and their states.
 * @property {Object} selectors - Selector functions to retrieve parts of the state.
 */
export const departmentsSlice = createSlice({
  name: 'departments',
  initialState: {
    departments: mockDepartments,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    handleAsyncActions(builder, getDepartmentsAsync, 'departments');
  },
  selectors: {
    /**
     * @returns {Array}
     */
    selectDepartments: (state) => state.departments,

    /**
     * @returns {string} (e.g., 'idle', 'loading', 'succeeded', 'failed').
     */
    selectDepartmentsStatus: (state) => state.status,

    /**
     * @returns {string|null}
     */
    selectDepartmentsError: (state) => state.error,
  },
});

export const {
  selectDepartments,
  selectDepartmentsStatus,
  selectDepartmentsError,
} = departmentsSlice.selectors;

export default departmentsSlice.reducer;
