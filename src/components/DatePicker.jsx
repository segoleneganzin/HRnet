import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import dayjs from 'dayjs';
import { DatePicker as MUIDatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

/**
 * Custom date picker component integrated with react-hook-form and MUI DatePicker.
 *
 * @param {Object} props
 * @param {Object} props.control - The react-hook-form control object for managing form state.
 * @param {Object} props.field - The field configuration object.
 * @param {string} props.field.name - The name of the field, used for form registration.
 * @param {boolean} [props.field.isRequired=true] - Indicates if the field is required, default to `true`.
 * @param {function} [props.fieldErrorClass] - A function that returns a string with error classes based on the field name.
 * @returns {JSX.Element}
 */
const DatePicker = ({ control, field, fieldErrorClass }) => {
  const { name, isRequired = true } = field;

  return (
    // provides the necessary methods for date manipulation and formatting
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        control={control}
        name={name}
        rules={{ required: isRequired }}
        render={({ field: { onChange } }) => (
          <MUIDatePicker
            name={name}
            className={'input ' + fieldErrorClass(name)}
            format='MM/DD/YYYY'
            onChange={(date) => {
              onChange(date && dayjs(date));
            }}
            slotProps={{
              textField: {
                id: name,
              },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};
DatePicker.propTypes = {
  control: PropTypes.object.isRequired,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    isRequired: PropTypes.bool,
  }).isRequired,
  fieldErrorClass: PropTypes.func,
};
export default DatePicker;
