import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from '../features/employeesSlice';
import { selectDepartments } from '../features/departmentsSlice';
import { usStates } from '../utils/usStates';
import dayjs from 'dayjs';
import Input from '../components/Input';
import Select from '../components/Select';
import FormData from './FormData';
import DatePicker from '../components/DatePicker ';
import Button from '../components/Button';

const CreateEmployeeForm = ({ toggleModal }) => {
  const dispatch = useDispatch();

  const departments = useSelector((state) => selectDepartments(state));

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  /**
   * Function to obtain the error class for a given field.
   * @param {string} field
   * @returns {string} - Field error class.
   */
  const fieldErrorClass = (fieldName) => {
    return errors[fieldName] ? 'field--error' : '';
  };

  /**
   * Function to handle form submission
   * @param {object} data - Form data
   */
  const formSubmit = (formData) => {
    // Generate a unique ID for the new employee
    const newEmployee = {
      id: uuidv4(),
      ...formData,
      birth: dayjs(formData.birth).toISOString(),
      startDate: dayjs(formData.startDate).toISOString(),
    };
    dispatch(addEmployee(newEmployee));
    toggleModal();
    reset(); // reinitialize form when addEmployee succeeded
  };

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className={'form create-employee__form'}
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
          fieldErrorClass={fieldErrorClass}
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
          fieldErrorClass={fieldErrorClass}
        />
      </FormData>

      {/* Birth Date Field */}
      <FormData
        field={{ name: 'birth', label: 'Date of Birth' }}
        errors={errors}
      >
        <DatePicker
          control={control}
          field={{
            name: 'birth',
            maxDate: dayjs().subtract(16, 'year'),
          }}
          fieldErrorClass={fieldErrorClass}
        />
      </FormData>

      {/* Start Date Field */}
      <FormData
        field={{ name: 'startDate', label: 'Start Date' }}
        errors={errors}
      >
        <DatePicker
          control={control}
          field={{
            name: 'startDate',
          }}
          fieldErrorClass={fieldErrorClass}
        />
      </FormData>

      {/* Address Fieldset */}
      <fieldset className={'address'}>
        <legend>Address</legend>
        <FormData field={{ name: 'street', label: 'Street' }} errors={errors}>
          <Input
            field={{ name: 'street' }}
            register={register}
            fieldErrorClass={fieldErrorClass}
          />
        </FormData>

        <FormData field={{ name: 'city', label: 'City' }} errors={errors}>
          <Input
            field={{ name: 'city' }}
            register={register}
            fieldErrorClass={fieldErrorClass}
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
            fieldErrorClass={fieldErrorClass}
          />
        </FormData>

        <FormData
          field={{ name: 'zipCode', label: 'Zip Code' }}
          errors={errors}
        >
          <Input
            field={{ name: 'zipCode', type: 'number', pattern: /^\d{5}$/ }} // 5 numbers only
            register={register}
            fieldErrorClass={fieldErrorClass}
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
          fieldErrorClass={fieldErrorClass}
        />
      </FormData>
      <Button text='Create' className='btn--validation bold' />
    </form>
  );
};
CreateEmployeeForm.propTypes = {
  toggleModal: PropTypes.func,
};
export default CreateEmployeeForm;
