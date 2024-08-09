import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Input from '../components/Input';
import Select from '../components/Select';
import FormData from './FormData';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../features/employeesSlice';
import { usStates } from '../utils/usStates';
import { getDepartments } from '../services/departmentAPI';
import { useState } from 'react';

const CreateEmployeeForm = ({ toggleModal }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [departments, setDepartments] = useState([]);
  const fetchDepartments = async () => {
    try {
      const data = await getDepartments();
      setDepartments(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  // Effect to fetch mocked departments data
  useEffect(() => {
    fetchDepartments();
  }, []);

  /**
   * Function to obtain the error class for a given field.
   * @param {string} field
   * @returns {string} - Field error class.
   */
  const fieldClass = (fieldName) => {
    return errors[fieldName] ? 'field--error' : 'field';
  };

  /**
   * Function to handle form submission
   * @param {object} data - Form data
   */
  const formSubmit = (formData) => {
    // Generate a unique ID for the new employee
    const newEmployee = { id: uuidv4(), ...formData };
    dispatch(addEmployee(newEmployee));
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
      <FormData
        field={{ name: 'firstName', label: 'First Name' }}
        errors={errors}
      >
        <Input
          field={{ name: 'firstName' }}
          register={register}
          fieldClass={fieldClass}
        />
      </FormData>

      {/* Last Name Field */}
      <FormData
        field={{ name: 'lastName', label: 'Last Name' }}
        errors={errors}
      >
        <Input
          field={{ name: 'lastName' }}
          register={register}
          fieldClass={fieldClass}
        />
      </FormData>

      {/* Birth Date Field */}
      <FormData
        field={{ name: 'birth', label: 'Date of Birth' }}
        errors={errors}
      >
        <Input
          field={{ name: 'birth', type: 'date' }}
          register={register}
          fieldClass={fieldClass}
        />
      </FormData>

      {/* Start Date Field */}
      <FormData
        field={{ name: 'startDate', label: 'Start Date' }}
        errors={errors}
      >
        <Input
          field={{ name: 'startDate', type: 'date' }}
          register={register}
          fieldClass={fieldClass}
        />
      </FormData>

      {/* Address Fieldset */}
      <fieldset className={fieldClass('address')}>
        <legend>Address</legend>
        <FormData field={{ name: 'street', label: 'Street' }} errors={errors}>
          <Input
            field={{ name: 'street' }}
            register={register}
            fieldClass={fieldClass}
          />
        </FormData>

        <FormData field={{ name: 'city', label: 'City' }} errors={errors}>
          <Input
            field={{ name: 'city' }}
            register={register}
            fieldClass={fieldClass}
          />
        </FormData>

        <FormData field={{ name: 'state', label: 'State' }} errors={errors}>
          <Select
            field={{
              name: 'state',
              defaultValue: 'Choose a state',
              options: usStates,
            }}
            register={register}
            fieldClass={fieldClass}
          />
        </FormData>

        <FormData
          field={{ name: 'zipCode', label: 'Zip Code' }}
          errors={errors}
        >
          <Input
            field={{ name: 'zipCode', type: 'number' }}
            register={register}
            fieldClass={fieldClass}
          />
        </FormData>
      </fieldset>

      {/* Department Field */}
      <FormData
        field={{ name: 'department', label: 'Department' }}
        errors={errors}
      >
        <Select
          field={{
            name: 'department',
            defaultValue: 'Choose a department',
            options: departments,
          }}
          register={register}
          fieldClass={fieldClass}
        />
      </FormData>
      <button>Create</button>
    </form>
  );
};
CreateEmployeeForm.propTypes = {
  isModalOpen: PropTypes.bool,
  toggleModal: PropTypes.func,
};
export default CreateEmployeeForm;
