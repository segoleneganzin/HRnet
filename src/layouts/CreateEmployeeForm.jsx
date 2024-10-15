import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from '../features/employeesSlice';
import { selectDepartments } from '../features/departmentsSlice';
import { usStates } from '../utils/usStates';
import dayjs from 'dayjs';
import FormField from '../components/FormField';
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
  const fieldErrorClass = (fieldName) =>
    errors[fieldName] ? 'field--error' : '';

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

  // separated in groups to apply css grid
  const fieldsGroup1 = [
    { name: 'firstName', label: 'First name' },
    { name: 'lastName', label: 'Last name' },
    { name: 'dateOfBirth', label: 'Date of birth', type: 'datePicker' },
    { name: 'startDate', label: 'Start date', type: 'datePicker' },
  ];

  const fieldsGroup2 = [
    { name: 'street', label: 'Street' },
    { name: 'city', label: 'City' },
    {
      name: 'state',
      label: 'State',
      type: 'select',
      defaultValue: 'Choose a state',
      options: usStates,
    },
    { name: 'zipCode', label: 'Zip code', type: 'number', pattern: /^\d{5}$/ }, // 5 numbers only
  ];

  const fieldsGroup3 = [
    {
      name: 'department',
      label: 'Department',
      type: 'select',
      defaultValue: 'Choose a department',
      options: departments,
    },
  ];

  const defaultPropsField = {
    register: register,
    fieldErrorClass: fieldErrorClass,
    errors: errors,
    control: control,
  };

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className={'form create-employee-form'}
      id={'createEmployeeForm'}
      data-testid='create-employee-form'
      noValidate
    >
      <div className='create-employee-form__fields'>
        <div className='create-employee-form__section'>
          {fieldsGroup1.map((field) => (
            <FormField key={field.name} field={field} {...defaultPropsField} />
          ))}
        </div>

        <div className='create-employee-form__section'>
          {/* Address Fieldset */}
          <fieldset className={'create-employee-form__address'}>
            <legend className='fieldset-legend'>Address</legend>
            {fieldsGroup2.map((field) => (
              <FormField
                key={field.name}
                field={field}
                {...defaultPropsField}
              />
            ))}
          </fieldset>
        </div>

        <div className='create-employee-form__section'>
          {fieldsGroup3.map((field) => (
            <FormField key={field.name} field={field} {...defaultPropsField} />
          ))}
        </div>
      </div>

      <Button
        content='Create'
        className='create-employee-form__btn bold'
        ariaLabel='Create employee'
      />
    </form>
  );
};
CreateEmployeeForm.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
export default CreateEmployeeForm;
