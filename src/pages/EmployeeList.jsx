import EmployeeListTable from '../layouts/EmployeeListTable';
import PageLayout from '../layouts/PageLayout';
import SectionLayout from '../layouts/SectionLayout';

/**
 * EmployeeList component renders a page displaying the list of current employees.
 * It includes a table that shows employee details.
 *
 * @returns {JSX.Element}
 */
const EmployeeList = () => (
  <PageLayout pageTitle={'Current Employees'} mainClassName={'employee-list'}>
    <SectionLayout title={'Current employees'}>
      <EmployeeListTable />
    </SectionLayout>
  </PageLayout>
);

export default EmployeeList;
