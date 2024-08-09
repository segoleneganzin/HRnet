import PropTypes from 'prop-types';

/**
 * SelectField component renders a select dropdown based on the provided configuration.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.fieldName - The name of the field.
 * @param {Object} props.field - The configuration object for the field.
 * @param {function} props.register - The register function from useForm hook.
 * @param {function} props.inputErrorClass - The function to determine the error class for the input.
 * @param {function} props.onChange
 * @returns {JSX.Element} - The JSX element for the select dropdown.
 */
const Select = ({ field, register, fieldClass }) => {
  const {
    name,
    isRequired = true, // Default value for isRequired
    defaultValue = 'Choose an option',
    options,
  } = field;
  return (
    <select
      id={name}
      name={name}
      className={
        `sg-form-lib__select` + fieldClass(name) // into css : sg-form-lib__input / sg-form-lib__textarea, ...
      }
      {...register(name, {
        required: isRequired,
      })}
    >
      <option value=''>{defaultValue}</option>
      {options.map((option, index) => {
        return (
          <option value={option.value} key={index}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};

Select.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    isRequired: PropTypes.bool,
    defaultValue: PropTypes.string,
    options: PropTypes.array,
  }).isRequired,
  fieldClass: PropTypes.func,
  register: PropTypes.func.isRequired,
};
export default Select;
