import EmployeeListTable from '../layouts/EmployeeListTable';
import PageLayout from '../layouts/PageLayout';

const EmployeeList = () => {
  return (
    <PageLayout pageTitle={'Current Employees'} mainClassName={'employee-list'}>
      <>
        <h3 className='employee-list__title title'>Current Employees</h3>

        <EmployeeListTable />
      </>
    </PageLayout>
  );
};

export default EmployeeList;
