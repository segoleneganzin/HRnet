import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import dayjs from 'dayjs';
import { DatePicker as MUIDatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const DatePicker = ({ control, field, fieldErrorClass }) => {
  const { name, isRequired = true, maxDate } = field;
  return (
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
            maxDate={maxDate && maxDate}
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
    maxDate: PropTypes.instanceOf(dayjs),
    isRequired: PropTypes.bool,
  }).isRequired,
  fieldErrorClass: PropTypes.func,
};
export default DatePicker;
