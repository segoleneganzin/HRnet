import EmployeeListTable from '../layouts/EmployeeListTable';
import PageLayout from '../layouts/PageLayout';
import SectionLayout from '../layouts/SectionLayout';

const EmployeeList = () => {
  return (
    <PageLayout pageTitle={'Current Employees'} mainClassName={'employee-list'}>
      <SectionLayout title={'Current employees'}>
        <EmployeeListTable />
      </SectionLayout>
    </PageLayout>
  );
};

export default EmployeeList;
