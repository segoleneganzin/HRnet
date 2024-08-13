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
    <PageLayout pageTitle={'Create employee'}>
      <>
        <h2>Create employee</h2>
        <a onClick={toggleModal}>toggleModal</a>
        <CreateEmployeeForm toggleModal={toggleModal} />
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            toggleModal={toggleModal}
            infos={{ btnText: 'Close' }}
            styleTheme={'light'}
          >
            <p>Employee Created !</p>
          </Modal>
        )}
      </>
    </PageLayout>
  );
};

export default CreateEmployee;
