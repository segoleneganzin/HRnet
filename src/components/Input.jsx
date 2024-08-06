import PropTypes from 'prop-types';

const Input = ({ field, register, inputErrorClass }) => {
  const { name, type, isRequired, pattern } = field;
  return (
    <input
      type={type}
      id={name}
      name={name}
      className={inputErrorClass(name)}
      {...register(name, {
        required: isRequired,
        pattern: pattern || null, // null by default, if the information isn't set into fieldConfig
      })}
      aria-required={isRequired}
      aria-invalid={!!inputErrorClass(name)}
    />
  );
};
Input.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isRequired: PropTypes.bool.isRequired,
    pattern: PropTypes.string,
  }).isRequired,
  inputErrorClass: PropTypes.func,
  register: PropTypes.func.isRequired,
};

export default Input;
