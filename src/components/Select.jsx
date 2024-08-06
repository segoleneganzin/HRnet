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
const Select = ({ field, register, inputErrorClass }) => (
  <select
    id={field.name}
    name={field.name}
    type={field.type}
    className={
      `sg-form-lib__select` + inputErrorClass(field.name) // into css : sg-form-lib__input / sg-form-lib__textarea, ...
    }
    hidden={field.hidden}
    {...register(field.name, {
      required: field.isRequired,
    })}
  >
    <option value=''>{field.defaultValue}</option>
    {field.options.map((option, index) => {
      return (
        <option value={option.value} key={index}>
          {option.label}
        </option>
      );
    })}
  </select>
);

Select.propTypes = {
  field: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  inputErrorClass: PropTypes.func.isRequired,
};
export default Select;
