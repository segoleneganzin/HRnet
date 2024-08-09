import EmployeeListTable from '../layouts/EmployeeListTable';
import PageLayout from '../layouts/PageLayout';

const EmployeeList = () => {
  return (
    <PageLayout pageTitle={'Current Employees'}>
      <>
        <h2>Current Employees</h2>

        <EmployeeListTable />
      </>
    </PageLayout>
  );
};

export default EmployeeList;
