import PageLayout from '../layouts/PageLayout';
import HomeCard from '../components/HomeCard';
import currentEmployeesIcon from '../assets/img/currentEmployeesIcon.svg';
import createEmployeeIcon from '../assets/img/createEmployeeIcon.svg';

/**
 * Home component serves as the landing page of the application.
 * It provides quick access to two primary functionalities:
 * - Viewing and managing current employees
 * - Creating new employees
 *
 * @returns {JSX.Element}
 */
const Home = () => (
  <PageLayout pageTitle={'HRnet'} mainClassName={'home'}>
    <>
      <div className='home__content'>
        <HomeCard
          icon={currentEmployeesIcon}
          title={'Current employees'}
          description={
            'View and manage the list of all current employees. Access detailed information, filter, search, and sort employee records easily'
          }
          link={'/employee-list'}
          linkText={'View employees'}
        />
        <HomeCard
          icon={createEmployeeIcon}
          title={'Create employees'}
          description={
            'Add a new employee to the system. Fill out the form to enter all necessary details and onboard new team members effortlessly.'
          }
          link={'/create-employee'}
          linkText={'Create employee'}
        />
      </div>
    </>
  </PageLayout>
);

export default Home;
