import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import Input from '../components/Input';
import Select from '../components/Select';
import FormDataLayout from './FormDataLayout';
import { createEmployeeFormField } from '../utils/createEmployeeFormFields'; // form data
import { useDispatch } from 'react-redux';
import { createEmployee } from '../features/EmployeesSlice';

const CreateEmployeeForm = ({ toggleModal }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /**
   * Function to obtain the error class for a given field.
   * @param {string} field
   * @returns {string} - Field error class.
   */
  const inputErrorClass = (fieldName) => {
    return errors[fieldName] ? 'field--error' : 'field';
  };

  /**
   * Function to handle form submission
   * @param {object} data - Form data
   */
  const formSubmit = (employee) => {
    console.log('Form Data:', employee);
    dispatch(createEmployee(employee));
    toggleModal();
  };

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className={'form'}
      id={'createEmployeeForm'}
      noValidate
    >
      {/* First Name Field */}
      <FormDataLayout
        field={createEmployeeFormField['firstName']}
        errors={errors}
      >
        <Input
          field={createEmployeeFormField['firstName']}
          register={register}
          inputErrorClass={inputErrorClass}
        />
      </FormDataLayout>

      {/* Last Name Field */}
      <FormDataLayout
        field={createEmployeeFormField['lastName']}
        errors={errors}
      >
        <Input
          field={createEmployeeFormField['lastName']}
          register={register}
          inputErrorClass={inputErrorClass}
        />
      </FormDataLayout>

      {/* Birth Date Field */}
      <FormDataLayout field={createEmployeeFormField['birth']} errors={errors}>
        <Input
          field={createEmployeeFormField['birth']}
          register={register}
          inputErrorClass={inputErrorClass}
        />
      </FormDataLayout>

      {/* Start Date Field */}
      <FormDataLayout
        field={createEmployeeFormField['startDate']}
        errors={errors}
      >
        <Input
          field={createEmployeeFormField['startDate']}
          register={register}
          inputErrorClass={inputErrorClass}
        />
      </FormDataLayout>

      {/* Address Fieldset */}
      <fieldset className={inputErrorClass('address')}>
        <legend>Address</legend>
        <FormDataLayout
          field={createEmployeeFormField['street']}
          errors={errors}
        >
          <Input
            field={createEmployeeFormField['street']}
            register={register}
            inputErrorClass={inputErrorClass}
          />
        </FormDataLayout>

        <FormDataLayout field={createEmployeeFormField['city']} errors={errors}>
          <Input
            field={createEmployeeFormField['city']}
            register={register}
            inputErrorClass={inputErrorClass}
          />
        </FormDataLayout>

        <FormDataLayout
          field={createEmployeeFormField['state']}
          errors={errors}
        >
          <Select
            field={createEmployeeFormField['state']}
            register={register}
            inputErrorClass={inputErrorClass}
          />
        </FormDataLayout>

        <FormDataLayout
          field={createEmployeeFormField['zipCode']}
          errors={errors}
        >
          <Input
            field={createEmployeeFormField['zipCode']}
            register={register}
            inputErrorClass={inputErrorClass}
          />
        </FormDataLayout>
      </fieldset>

      {/* Department Field */}
      <FormDataLayout
        field={createEmployeeFormField['department']}
        errors={errors}
      >
        <Select
          field={createEmployeeFormField['department']}
          register={register}
          inputErrorClass={inputErrorClass}
        />
      </FormDataLayout>
      <button>Create</button>
    </form>
  );
};
CreateEmployeeForm.propTypes = {
  isModalOpen: PropTypes.bool,
  toggleModal: PropTypes.func,
};
export default CreateEmployeeForm;
