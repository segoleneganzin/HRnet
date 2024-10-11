import PropTypes from 'prop-types';
import { useState } from 'react';
import FAB from '../components/FAB';
import CreateEmployeeForm from '../layouts/CreateEmployeeForm';
import PageLayout from '../layouts/PageLayout';
import SectionLayout from '../layouts/SectionLayout';
import currentEmployeesFabIcon from '../assets/img/currentEmployeesFabIcon.svg';
import { Modal } from 'sg-modal-lib';

/**
 * CreateEmployee component renders a page for creating a new employee, including a form
 * and a modal for confirmation.
 * @param {Object} props
 * @param {boolean} props.initialModalOpen // use for tests
 * @returns {JSX.Element}
 */
const CreateEmployee = ({ initialModalOpen = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(initialModalOpen);

  const CustomFAB = (
    <FAB
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
    <PageLayout
      pageTitle='Create employee'
      mainClassName='create-employee'
      dataTestId='create-employee'
    >
      <SectionLayout title={'CREATE EMPLOYEE'} buttonComponent={CustomFAB}>
        <>
          <CreateEmployeeForm toggleModal={toggleModal} />

          <Modal
            isOpen={isModalOpen}
            toggleModal={toggleModal}
            fadeDuration={300}
          >
            <p>Employee Created !</p>
          </Modal>
        </>
      </SectionLayout>
    </PageLayout>
  );
};
CreateEmployee.propTypes = {
  initialModalOpen: PropTypes.bool,
};

export default CreateEmployee;
