import PropTypes from 'prop-types';

const Input = ({ field, register, fieldClass }) => {
  const {
    name,
    type = 'text', // Default value for type
    isRequired = true, // Default value for isRequired
    pattern,
  } = field;
  return (
    <input
      type={type}
      id={name}
      name={name}
      className={fieldClass(name)}
      {...register(name, {
        required: isRequired,
        pattern: pattern || null, // null by default, if the information isn't set into fieldConfig
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
    pattern: PropTypes.string,
  }).isRequired,
  fieldClass: PropTypes.func,
  handleChange: PropTypes.func,
  register: PropTypes.func.isRequired,
};

export default Input;
