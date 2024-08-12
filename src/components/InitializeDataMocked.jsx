import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeesAsync, selectEmployees } from '../features/employeesSlice';

const InitializeDataMocked = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => selectEmployees(state));
  useEffect(() => {
    if (employees.length === 0) {
      dispatch(getEmployeesAsync());
    }
  }, [dispatch, employees]);

  return null;
};

export default InitializeDataMocked;
