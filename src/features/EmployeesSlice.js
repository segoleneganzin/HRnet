import { createSlice } from '@reduxjs/toolkit';

// Redux slice for profile state management
export const employeesSlice = createSlice({
  name: 'employees',
  initialState: {
    employees: JSON.parse(sessionStorage.getItem('employees')) || [],
    status: 'idle',
    error: null,
  },
  reducers: {
    createEmployee: (state, employee) => {
      state.employees.push(employee);
      sessionStorage.setItem('employees', JSON.stringify(state.employees));
    },
  },
  selectors: {
    selectEmployees: (state) => state.profiles,
    selectEmployeesStatus: (state) => state.status,
    selectEmployeesError: (state) => state.error,
  },
});

export const { createEmployee } = employeesSlice.actions;
export const { selectEmployees, selectEmployeesStatus, selectEmployeesError } =
  employeesSlice.selectors;

export default employeesSlice.reducer;
