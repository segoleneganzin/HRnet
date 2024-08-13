import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../features/employeesSlice';
import { usStates } from '../utils/usStates';
import { getDepartments } from '../services/departmentAPI';
import dayjs from 'dayjs';
import Input from '../components/Input';
import Select from '../components/Select';
import FormData from './FormData';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import DatePicker from '../components/DatePicker ';
import Button from '../components/Button';

const CreateEmployeeForm = ({ toggleModal }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      startDate: dayjs().toISOString(), // Valeur par défaut pour le startDate
    },
  });

  const [birthDate, setBirthDate] = useState('');
  const [minStartDate, setMinStartDate] = useState(dayjs());
  const maxBirthDate = dayjs().subtract(16, 'year');

  // manage start date depends of birth date
  useEffect(() => {
    if (birthDate) {
      const minDate = dayjs(birthDate).add(16, 'year');
      setMinStartDate(minDate);
    } else {
      setMinStartDate(dayjs());
    }
  }, [birthDate]);

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
    const newEmployee = {
      id: uuidv4(),
      ...formData,
      birth: dayjs(formData.birth).toISOString(),
      startDate: dayjs(formData.startDate).toISOString(),
    };
    dispatch(addEmployee(newEmployee));
    toggleModal();
    reset(); // reinitialize form when addEmployee succeeded
    setMinStartDate(dayjs());
  };

  return (
    // for datePicker
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
          <DatePicker
            control={control}
            field={{
              name: 'birth',
              textError: 'Please enter a date of Birth',
              maxDate: maxBirthDate,
            }}
            setDate={setBirthDate}
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
              minDate: minStartDate,
              textError: 'Please enter a start Date',
            }}
          />
        </FormData>

        {/* Address Fieldset */}
        <fieldset className={'address'}>
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
              field={{ name: 'zipCode', type: 'number', pattern: /^\d{5}$/ }} // 5 numbers only
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
        <Button text='Create' className='btn--validation' />
      </form>
    </LocalizationProvider>
  );
};
CreateEmployeeForm.propTypes = {
  toggleModal: PropTypes.func,
};
export default CreateEmployeeForm;
