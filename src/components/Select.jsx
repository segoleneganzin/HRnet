import PropTypes from 'prop-types';

/**
 * SelectField component renders a select dropdown based on the provided configuration.
 *
 * @param {Object} props - The properties object.
 * @param {Object} props.field - The configuration object for the field.
 * @param {function} props.register - The register function from useForm hook.
 * @param {function} props.fieldClass - The function to determine the error class for the input.
 * @returns {JSX.Element} - The JSX element for the select dropdown.
 */
const Select = ({ field, register, fieldClass }) => {
  const {
    name,
    isRequired = true, // Default value
    defaultValue = 'Choose an option', // Default value
    options,
  } = field;
  return (
    <select
      id={name}
      name={name}
      className={`select ` + fieldClass(name)}
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
  register: PropTypes.func.isRequired,
  fieldClass: PropTypes.func,
};
export default Select;
