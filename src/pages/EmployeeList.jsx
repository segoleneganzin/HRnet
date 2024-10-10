import FAB from '../components/FAB';
import EmployeeListTable from '../layouts/EmployeeListTable';
import PageLayout from '../layouts/PageLayout';
import SectionLayout from '../layouts/SectionLayout';
import createEmployeeFabIcon from '../assets/img/createEmployeeFabIcon.svg';

/**
 * EmployeeList component renders a page displaying the list of current employees.
 * It includes a table that shows employee details.
 *
 * @returns {JSX.Element}
 */
const EmployeeList = () => {
  const CustomFAB = (
    <FAB
      icon={createEmployeeFabIcon}
      text={'Add employee'}
      link='/create-employee'
    />
  );
  return (
    <PageLayout
      pageTitle='Current Employees'
      mainClassName='employee-list'
      dataTestId='employee-list'
    >
      <SectionLayout title={'CURRENT EMPLOYEES'} buttonComponent={CustomFAB}>
        <EmployeeListTable />
      </SectionLayout>
    </PageLayout>
  );
};

export default EmployeeList;
