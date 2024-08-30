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
import DatePicker from '../components/DatePicker';
import Button from '../components/Button';

/**
 * Component that renders a form for creating a new employee.
 *
 * @param {Object} props
 * @param {Function} props.toggleModal - Function to toggle the visibility of the modal after form submission.
 * @returns {JSX.Element}
 */
const CreateEmployeeForm = ({ toggleModal }) => {
  // Get departments from the Redux store
  const departments = useSelector((state) => selectDepartments(state));
  const dispatch = useDispatch();
  // Initialize the react-hook-form methods
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  /**
   * Function to obtain the error class for a given field.
   * @param {string} fieldName
   * @returns {string} - Field error class.
   */
  const fieldErrorClass = (fieldName) => {
    return errors[fieldName] ? 'field--error' : '';
  };

  /**
   * Function to handle form submission
   * @param {object} formData
   */
  const formSubmit = (formData) => {
    const newEmployee = {
      id: uuidv4(), // Generate a unique ID for the new employee
      ...formData,
      dateOfBirth: dayjs(formData.dateOfBirth).format('MM/DD/YYYY'),
      startDate: dayjs(formData.startDate).format('MM/DD/YYYY'),
    };
    dispatch(addEmployee(newEmployee));
    toggleModal();
    reset(); // reinitialize form when addEmployee succeeded
  };

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className={'form create-employee-form'}
      id={'createEmployeeForm'}
      noValidate
    >
      <div className='create-employee-form__fields-container'>
        <div className='create-employee-form__section'>
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
          <FormData
            field={{ name: 'dateOfBirth', label: 'Date of birth' }}
            errors={errors}
          >
            <DatePicker
              control={control}
              field={{
                name: 'dateOfBirth',
              }}
              errors={errors}
            />
          </FormData>
          <FormData
            field={{ name: 'startDate', label: 'Start Date' }}
            errors={errors}
          >
            <DatePicker
              control={control}
              field={{
                name: 'startDate',
              }}
              errors={errors}
            />
          </FormData>
        </div>
        <div className='create-employee-form__section'>
          {/* Address Fieldset */}
          <fieldset className={'create-employee-form__address'}>
            <legend className='fieldset-legend'>Address</legend>
            <FormData
              field={{ name: 'street', label: 'Street' }}
              errors={errors}
            >
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
        </div>
      </div>
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
      <Button text='Create' className='bold create-employee-form__btn' />
    </form>
  );
};
CreateEmployeeForm.propTypes = {
  toggleModal: PropTypes.func,
};
export default CreateEmployeeForm;
