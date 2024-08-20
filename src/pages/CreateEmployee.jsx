import CreateEmployeeForm from '../layouts/CreateEmployeeForm';
import PageLayout from '../layouts/PageLayout';
import { useState } from 'react';
import { Modal } from 'sg-modal';

const CreateEmployee = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <PageLayout pageTitle={'Create employee'} mainClassName={'create-employee'}>
      <>
        <h3 className='create-employee__title page__title'>Create employee</h3>
        <button onClick={toggleModal} className='btn'>
          Test modal
        </button>
        <CreateEmployeeForm toggleModal={toggleModal} />
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            toggleModal={toggleModal}
            infos={{ btnText: 'Close' }}
            // styleTheme={'light'}
            // styleTheme={'dark'}
          >
            <p>Employee Created !</p>
          </Modal>
        )}
      </>
    </PageLayout>
  );
};

export default CreateEmployee;
