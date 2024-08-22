import PageLayout from '../layouts/PageLayout';
import HomeCard from '../components/HomeCard';
const Home = () => {
  return (
    <PageLayout pageTitle={'HRnet'} mainClassName={'home'}>
      <>
        <div className='home__content'>
          <HomeCard link={'/employee-list'} linkText={'Current employees'} />
          <HomeCard link={'/create-employee'} linkText={'Create employee'} />
        </div>
      </>
    </PageLayout>
  );
};

export default Home;
