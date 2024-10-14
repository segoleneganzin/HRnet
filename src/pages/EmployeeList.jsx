import { lazy, Suspense } from 'react';
import FAB from '../components/FAB';
import PageLayout from '../layouts/PageLayout';
import createEmployeeFabIcon from '../assets/img/createEmployeeFabIcon.svg';
import Loader from '../components/Loader';

const SectionLayout = lazy(() => import('../layouts/SectionLayout'));
const EmployeeListTable = lazy(() => import('../layouts/EmployeeListTable'));

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
      <Suspense fallback={<Loader />}>
        <SectionLayout title={'CURRENT EMPLOYEES'} buttonComponent={CustomFAB}>
          <EmployeeListTable />
        </SectionLayout>
      </Suspense>
    </PageLayout>
  );
};

export default EmployeeList;
