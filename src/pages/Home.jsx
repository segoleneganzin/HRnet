import { Link } from 'react-router-dom';
import PageLayout from '../layouts/PageLayout';

const Home = () => {
  return (
    <PageLayout pageTitle={'HRnet'} mainClassName={'home'}>
      <>
        <div className='home__content'>
          <Link to={'/employee-list'} className='home__link'>
            Current Employees
          </Link>
          <Link to={'/create-employee'} className='home__link'>
            Create employee
          </Link>
        </div>
      </>
    </PageLayout>
  );
};

export default Home;
