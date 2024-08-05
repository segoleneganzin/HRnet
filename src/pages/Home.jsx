import PageLayout from '../layouts/PageLayout';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <PageLayout pageTitle={'HRnet'} mainClassName={'home'}>
      <>
        <Link to={'/current-employees'}>View Current Employees</Link>
        <Link to={'/create-employee'}>Create employee</Link>
      </>
    </PageLayout>
  );
};

export default Home;
