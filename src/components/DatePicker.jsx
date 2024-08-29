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
 * @param {function} props.errors - The errors object to manage UI.
 * @returns {JSX.Element}
 */
const DatePicker = ({ control, field, errors }) => {
  const { name, isRequired = true } = field;

  const inputStyles = {
    borderRadius: '4px',
    border: errors[name] ? '2px solid rgb(233, 113, 113)' : '1px solid #e8e8e8',
  };

  return (
    // provides the necessary methods for date manipulation and formatting
    <Controller
      control={control}
      name={name}
      defaultValue={null}
      rules={{ required: isRequired }}
      render={({ field: { onChange, value } }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MUIDatePicker
            name={name}
            className={'input '}
            format='MM/DD/YYYY'
            value={value}
            onChange={(date) => {
              onChange(dayjs(date));
            }}
            slotProps={{
              textField: {
                id: name,
                sx: inputStyles,
              },
              actionBar: {
                actions: ['cancel', 'today', 'accept'],
              },
            }}
          />
        </LocalizationProvider>
      )}
    />
  );
};
DatePicker.propTypes = {
  control: PropTypes.object.isRequired,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    isRequired: PropTypes.bool,
  }).isRequired,
  errors: PropTypes.object.isRequired,
};
export default DatePicker;
