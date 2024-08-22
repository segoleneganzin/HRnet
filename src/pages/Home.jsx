import PageLayout from '../layouts/PageLayout';
import HomeCard from '../components/HomeCard';
import currentEmployeesIcon from '../assets/currentEmployeesIcon.svg';
import createEmployeeIcon from '../assets/createEmployeeIcon.svg';

const Home = () => {
  return (
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
};

export default Home;
