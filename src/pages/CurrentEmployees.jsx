import PageLayout from '../layouts/PageLayout';
import { useSelector } from 'react-redux';
import { selectEmployees } from '../features/EmployeesSlice';

const CurrentEmployees = () => {
  const employees = useSelector((state) => selectEmployees(state));
  console.log(employees);
  return (
    <PageLayout pageTitle={'Current Employees'}>
      <>
        <h2>Current Employees</h2>
      </>
    </PageLayout>
  );
};

export default CurrentEmployees;
