import PropTypes from 'prop-types';

const Input = ({ field, register, fieldClass }) => {
  const {
    name,
    type = 'text', // Default value
    isRequired = true, // Default value
    pattern = null, // Default value
    placeholder = '', // Default value
  } = field;
  return (
    <input
      type={type}
      id={name}
      name={name}
      className={'input ' + fieldClass(name)}
      placeholder={placeholder}
      {...register(name, {
        required: isRequired,
        pattern: pattern,
      })}
      aria-required={isRequired}
      aria-invalid={fieldClass(name) === 'field--error'}
    />
  );
};
Input.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    isRequired: PropTypes.bool,
    pattern: PropTypes.instanceOf(RegExp),
    placeholder: PropTypes.string,
  }).isRequired,
  register: PropTypes.func.isRequired,
  fieldClass: PropTypes.func,
};

export default Input;
