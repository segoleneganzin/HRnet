import CreateEmployeeForm from '../layouts/CreateEmployeeForm';
import PageLayout from '../layouts/PageLayout';

const CreateEmployee = () => {
  return (
    <PageLayout pageTitle={'Create employee'}>
      <>
        <h2>Create employee</h2>
        <CreateEmployeeForm />
      </>
    </PageLayout>
  );
};

export default CreateEmployee;
