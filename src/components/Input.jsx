import PropTypes from 'prop-types';

/**
 * Input component integrated with react-hook-form.
 *
 * @param {Object} props
 * @param {Object} props.field - Configuration object for the input field.
 * @param {string} props.field.name - The name of the input field.
 * @param {string} [props.field.type='text'] - The type of the input field (e.g., 'text', 'email', 'password'). Defaults to 'text'.
 * @param {boolean} [props.field.isRequired=true] - Indicates if the field is required for form validation. Defaults to `true`.
 * @param {RegExp} [props.field.pattern=null] - A regular expression pattern for validating the input value. Defaults to `null`.
 * @param {function} props.register - The `register` function from react-hook-form used to register the input field.
 * @param {function} [props.fieldErrorClass] - A function that returns CSS classes for error styling based on the field's name.
 * @returns {JSX.Element}
 */
const Input = ({ field, register, fieldErrorClass }) => {
  const { name, type = 'text', isRequired = true, pattern = null } = field;

  return (
    <input
      type={type}
      id={name}
      name={name}
      className={'input ' + fieldErrorClass(name)}
      {...register(name, {
        required: isRequired,
        pattern: pattern,
      })}
      aria-required={isRequired}
      aria-invalid={fieldErrorClass(name) === 'field--error'}
    />
  );
};

Input.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    isRequired: PropTypes.bool,
    pattern: PropTypes.instanceOf(RegExp),
  }).isRequired,
  register: PropTypes.func.isRequired,
  fieldErrorClass: PropTypes.func,
};

export default Input;
