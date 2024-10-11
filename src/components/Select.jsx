import PropTypes from 'prop-types';

/**
 * Select component renders a select dropdown based on the provided configuration.
 *
 * @param {Object} props
 * @param {Object} props.field - Configuration object for the select field.
 * @param {string} props.field.name - The name of the select field.
 * @param {boolean} [props.field.isRequired=true] - Indicates if the field is required for form validation. Defaults to `true`.
 * @param {string} [props.field.defaultValue='Choose an option'] - The default option text displayed when no selection is made. Defaults to `'Choose an option'`.
 * @param {Array<Object>} props.field.options - Array of options for the select dropdown. Each option should be an object with `value` and `label` properties.
 *  @param {function} props.register - The `register` function from react-hook-form used to register the select field.
 * @param {function} [props.fieldErrorClass] - A function that returns CSS classes for error styling based on the field's name.
 * @returns {JSX.Element}
 *
 * @example
 * <Select
 *    field={{
 *      name: 'department',
 *      defaultValue: 'Choose a department',
 *      options: departments,
 *    }}
 *    register={register}
 *    fieldErrorClass={fieldErrorClass}
 * />
 */
const Select = ({ field, register, fieldErrorClass }) => {
  const {
    name,
    isRequired = true,
    defaultValue = 'Choose an option',
    options = [],
  } = field;

  return (
    <select
      id={name}
      name={name}
      className={`select ` + fieldErrorClass(name)}
      {...register(name, {
        required: isRequired,
      })}
      aria-required={isRequired}
      aria-invalid={fieldErrorClass(name) === 'field--error'}
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
  fieldErrorClass: PropTypes.func,
};
export default Select;
