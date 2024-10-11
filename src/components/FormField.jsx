import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import DatePicker from './DatePicker';
import Error from './Error';

/**
 * FormField component handles the layout of form data.
 * @param {Object} props - The props object.
 * @param {Object} props.field - The field configuration object.
 * @param {string} props.field.name - The name of the field (required).
 * @param {string} [props.field.label] - The label of the field.
 * @param {string} [props.field.type] - The type of the field (e.g., 'text', 'select', 'datePicker').
 * @param {string} [props.field.defaultValue] - The default value of the field.
 * @param {RegExp} [props.field.pattern] - A regex pattern for validating the field input.
 * @param {Array<{label: string, value: string}>} [props.field.options] - Options for select fields.
 * @param {Object} [props.control] - Control object for React Hook Form (required for datePicker).
 * @param {function} [props.register] - Register function from React Hook Form for input registration.
 * @param {function} [props.fieldErrorClass] - Function to determine the error class for the field.
 * @param {Object} props.errors - The errors object from React Hook Form to manage field errors.
 * @param {string} [props.className] - Additional classes for styling the field.
 * @returns {JSX.Element} The rendered form field component. *
 * @example
 * <FormField
 *  field={{ name: 'lastName', label: 'Lastname' }}
 *  register={register}
 *  fieldErrorClass={fieldErrorClass}
 *  errors={errors}
 * />
 * <FormField
 *  field={{
 *    type: 'select',
 *    name: 'state',
 *    label: 'State',
 *    defaultValue: 'Choose a state',
 *    options: usStates,
 *  }}
 *  register={register}
 *  fieldErrorClass={fieldErrorClass}
 *  errors={errors}
 * />
 */
const FormField = ({
  field,
  control,
  register,
  fieldErrorClass,
  errors,
  className = '',
}) => {
  const { type, name, label, defaultValue, pattern, options } = field;

  // Determine if there's an error for this field
  const hasError = Boolean(errors[name]);

  const renderInput = () => {
    switch (type) {
      case 'select':
        return (
          <Select
            field={{
              name,
              defaultValue: defaultValue || 'Choose a value',
              options: options || [],
            }}
            register={register}
            fieldErrorClass={fieldErrorClass}
          />
        );
      case 'datePicker':
        return (
          <DatePicker
            control={control}
            field={{
              name,
            }}
            errors={errors}
          />
        );
      default:
        return (
          <Input
            field={{ name: name, type: type, pattern: pattern }}
            register={register}
            fieldErrorClass={fieldErrorClass}
          />
        );
    }
  };

  return (
    <div className={`form-field ${className}`}>
      <label htmlFor={name} className='form-field__label label'>
        {label}
      </label>
      {renderInput()}
      {hasError && (
        <>
          {errors[name]?.type === 'required' && (
            <Error errorMessage={`Please enter a ${label.toLowerCase()}`} />
          )}
          {errors[name]?.type === 'pattern' && (
            <Error errorMessage='Invalid field' />
          )}
        </>
      )}
    </div>
  );
};
FormField.propTypes = {
  field: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    defaultValue: PropTypes.string,
    pattern: PropTypes.instanceOf(RegExp),
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  control: PropTypes.object,
  register: PropTypes.func,
  fieldErrorClass: PropTypes.func,
  errors: PropTypes.object.isRequired,
  className: PropTypes.string,
};
export default FormField;
