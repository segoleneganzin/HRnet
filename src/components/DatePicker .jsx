import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import dayjs from 'dayjs';
import { DatePicker as MUIDatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const CustomDatePicker = ({ control, field, setDate }) => {
  const {
    name,
    minDate = null,
    maxDate = null,
    textError = 'Please choose a date',
    isRequired = true, // Default value
  } = field;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        control={control}
        name={name}
        rules={isRequired && { required: textError }}
        render={({ field: { onChange, value } }) => (
          <MUIDatePicker
            name={name}
            className='input'
            format='MM/DD/YYYY'
            minDate={minDate}
            maxDate={maxDate}
            onChange={(date) => {
              onChange(date ? dayjs(date) : '');
              setDate && setDate(date ? date.toDate() : null);
            }}
            value={dayjs(value)}
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
CustomDatePicker.propTypes = {
  control: PropTypes.object.isRequired,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    minDate: PropTypes.instanceOf(dayjs),
    maxDate: PropTypes.instanceOf(dayjs),
    textError: PropTypes.string,
    isRequired: PropTypes.bool,
  }).isRequired,
  setDate: PropTypes.func,
};
export default CustomDatePicker;
