import { createSlice } from '@reduxjs/toolkit';
import { getDepartments } from '../services/departmentAPI';
import { createThunkAction, handleAsyncActions } from './slicerFunctions';
import mockDepartments from '../../public/mockDepartments.json';

const GET_DEPARTMENTS = 'employees/getDepartments';

export const getDepartmentsAsync = createThunkAction(
  GET_DEPARTMENTS,
  getDepartments
);

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
    selectDepartments: (state) => state.departments,
    selectDepartmentsStatus: (state) => state.status,
    selectDepartmentsError: (state) => state.error,
  },
});

export const {
  selectDepartments,
  selectDepartmentsStatus,
  selectDepartmentsError,
} = departmentsSlice.selectors;

export default departmentsSlice.reducer;
