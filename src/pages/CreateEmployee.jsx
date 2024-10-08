import { lazy, Suspense } from 'react';
import { useState } from 'react';
import FABButton from '../components/FABButton';
import CreateEmployeeForm from '../layouts/CreateEmployeeForm';
import PageLayout from '../layouts/PageLayout';
import SectionLayout from '../layouts/SectionLayout';
import currentEmployeesFabIcon from '../assets/img/currentEmployeesFabIcon.svg';

const Modal = lazy(() =>
  import('sg-modal-lib').then((module) => ({ default: module.Modal }))
);

/**
 * CreateEmployee component renders a page for creating a new employee, including a form
 * and a modal for confirmation.
 *
 * @returns {JSX.Element}
 */
const CreateEmployee = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const CustomFABButton = (
    <FABButton
      icon={currentEmployeesFabIcon}
      text={'View employees'}
      link='/employee-list'
    />
  );

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // scrolls the page to the top
  };

  return (
    <PageLayout pageTitle={'Create employee'} mainClassName={'create-employee'}>
      <SectionLayout
        title={'CREATE EMPLOYEE'}
        buttonComponent={CustomFABButton}
      >
        <>
          {/* <button onClick={toggleModal} className='btn'>
            Test modal
          </button> */}

          <CreateEmployeeForm toggleModal={toggleModal} />

          {isModalOpen && (
            <Suspense fallback={<div>Loading...</div>}>
              <Modal
                isOpen={isModalOpen}
                toggleModal={toggleModal}
                infos={{ btnText: 'Close' }}
                // styleTheme={'light'}
                // styleTheme={'dark'}
              >
                <p>Employee Created !</p>
              </Modal>
            </Suspense>
          )}
        </>
      </SectionLayout>
    </PageLayout>
  );
};

export default CreateEmployee;
