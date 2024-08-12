import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
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
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

const CreateEmployeeForm = ({ toggleModal }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      startDate: dayjs().toISOString(), // Valeur par défaut pour le startDate
    },
  });

  const [birthDate, setBirthDate] = useState('');
  const [minStartDate, setMinStartDate] = useState(dayjs());

  useEffect(() => {
    setValue('startDate', dayjs().toISOString()); // Définir la date par défaut si aucune date n'a été sélectionnée
  }, [setValue]);

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
      birth: formData.birth ? dayjs(formData.birth).toISOString() : '',
      startDate: formData.startDate
        ? dayjs(formData.startDate).toISOString()
        : '',
    };
    dispatch(addEmployee(newEmployee));
    toggleModal();
    reset(); // reinitialize form when addEmployee succeeded
    setMinStartDate(dayjs());
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
        <Controller
          control={control}
          name='birth'
          rules={{ required: 'Please enter a date of Birth' }}
          render={({ field }) => (
            <DatePicker
              name='birth'
              className='input'
              format='MM/DD/YYYY'
              onChange={(date) => {
                field.onChange(date ? dayjs(date) : '');
                setBirthDate(date ? date.toDate() : null);
              }}
              value={dayjs(field.value)}
              slotProps={{
                textField: {
                  id: 'birth',
                },
              }}
            />
          )}
        />
      </FormData>

      {/* Start Date Field */}
      <FormData
        field={{ name: 'startDate', label: 'Start Date' }}
        errors={errors}
      >
        <Controller
          control={control}
          name='startDate'
          rules={{ required: 'Please enter a start Date' }}
          render={({ field }) => (
            <DatePicker
              name='startDate'
              className='input'
              format='MM/DD/YYYY'
              minDate={minStartDate}
              onChange={(date) => field.onChange(date ? dayjs(date) : '')}
              value={dayjs(field.value)}
              slotProps={{
                textField: {
                  id: 'startDate',
                },
              }}
            />
          )}
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
            pattern='\d{5}'
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
  toggleModal: PropTypes.func,
};
export default CreateEmployeeForm;
