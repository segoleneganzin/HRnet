import PropTypes from 'prop-types';

/**
 * FormData component handles the layout of form data.
 * @param {Object} props
 * @param {Object} props.field - The field configuration object.
 * @param {string} props.field.name
 * @param {string} props.field.label
 * @param {Object} props.errors - The errors object to manage UI.
 * @param {ReactNode} props.children - The child elements of the layout.
 * @returns {JSX.Element}
 */
const FormData = ({ field, errors, children }) => {
  const { name, label } = field;

  // Determine if there's an error for this field
  const hasError = Boolean(errors[name]);

  return (
    <div className={'form-data'}>
      {label && (
        <label htmlFor={name} className={'label'}>
          {label}
        </label>
      )}

      {children}

      {hasError && (
        <p className={'form-data__error-message'}>
          {errors[name]?.type === 'required' &&
            `Please enter a ${label.toLowerCase()}`}
          {errors[name]?.type === 'pattern' && 'Invalid field'}
        </p>
      )}
    </div>
  );
};
FormData.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
  }).isRequired,
  errors: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};
export default FormData;
