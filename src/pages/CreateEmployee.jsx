import CreateEmployeeForm from '../layouts/CreateEmployeeForm';
import PageLayout from '../layouts/PageLayout';
import { useState } from 'react';
import Modal from '../layouts/Modal';

const CreateEmployee = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <PageLayout pageTitle={'Create employee'}>
      <>
        <h2>Create employee</h2>
        <CreateEmployeeForm toggleModal={toggleModal} />
        {isModalOpen && (
          <Modal
            isModalOpen={isModalOpen}
            toggleModal={toggleModal}
            btnText={'Close'}
          >
            <p>Employee Created!</p>
          </Modal>
        )}
      </>
    </PageLayout>
  );
};

export default CreateEmployee;
