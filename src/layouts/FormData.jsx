import PropTypes from 'prop-types';

/**
 * FormData component handles the layout of form data.
 * @param {Object} props - The properties object.
 * @param {Object} props.field - The field configuration object.
 * @param {Object} props.errors - The errors object.
 * @param {ReactNode} props.children - The child elements of the layout.
 * @returns {JSX.Element} The JSX element for the form data layout.
 */
const FormData = ({ field, errors, children }) => {
  const { name, label } = field;
  // Determine if there's an error for this field
  const hasError = Boolean(errors[name]);
  return (
    <div
      className={
        hasError
          ? 'form-data-layout form-data-layout--error'
          : 'form-data-layout'
      }
    >
      {/* label */}
      {label && (
        <label htmlFor={name} className={'label'}>
          {label}
        </label>
      )}
      {/* content */}
      {children}
      {/* error message */}
      {hasError && (
        <p className={'form-data-layout__error-message'}>
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
  children: PropTypes.element.isRequired,
};
export default FormData;
