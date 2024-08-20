import PropTypes from 'prop-types';

const Input = ({ field, register, fieldErrorClass }) => {
  const {
    name,
    type = 'text', // Default value
    isRequired = true, // Default value
    pattern = null, // Default value
  } = field;
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
