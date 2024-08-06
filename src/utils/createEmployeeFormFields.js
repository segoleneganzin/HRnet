import { states } from './states';
import { departments } from './departments';

const isRequired = true;
export const createEmployeeFormField = {
  firstName: {
    tag: 'input',
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    fieldErrorMessage: 'Please enter a first name',
    isRequired,
  },
  lastName: {
    tag: 'input',
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
    fieldErrorMessage: 'Please enter a last name',
    isRequired,
  },
  birth: {
    tag: 'input',
    name: 'birth',
    label: 'Date of Birth',
    type: 'date',
    fieldErrorMessage: 'Please enter a date of birth',
    isRequired,
  },
  startDate: {
    tag: 'input',
    name: 'startDate',
    label: 'Start Date',
    type: 'date',
    fieldErrorMessage: 'Please enter a start date',
    isRequired,
  },
  //   address
  street: {
    tag: 'input',
    name: 'street',
    label: 'Street',
    type: 'text',
    fieldErrorMessage: 'Please enter a street',
    isRequired,
  },
  city: {
    tag: 'input',
    name: 'city',
    label: 'City',
    type: 'text',
    fieldErrorMessage: 'Please enter a city',
    isRequired,
  },
  state: {
    tag: 'select',
    name: 'state',
    label: 'State',
    defaultValue: 'Choose a state',
    fieldErrorMessage: 'Please choose a state',
    options: states,
    isRequired,
  },
  zipCode: {
    tag: 'input',
    name: 'zipCode',
    label: 'Zip Code',
    type: 'number',
    fieldErrorMessage: 'Please enter a zip code',
    isRequired,
  },
  //    *****
  department: {
    tag: 'select',
    name: 'department',
    label: 'Department',
    defaultValue: 'Choose a department',
    fieldErrorMessage: 'Please choose a department',
    options: departments,
    isRequired,
  },
};
