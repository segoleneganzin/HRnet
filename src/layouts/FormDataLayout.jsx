import PropTypes from 'prop-types';

/**
 * FormDataLayout component handles the layout of form data.
 *
 * @param {Object} props - The properties object.
 * @param {Object} props.field - The field configuration object.
 * @param {Object} props.errors - The errors object.
 * @param {ReactNode} props.children - The child elements of the layout.
 * @returns {JSX.Element} The JSX element for the form data layout.
 */
const FormDataLayout = ({ field, errors, children }) => {
  // Determine if there's an error for this field
  const hasError = Boolean(errors[field.name]);
  return (
    <div className={hasError ? 'form-data-layout--error' : 'form-data-layout'}>
      {/* label */}
      <label htmlFor={field.name} className={'label'}>
        {field.label}
      </label>
      {/* content */}
      {children}
      {/* error message */}
      {hasError && (
        <p className={'error-message'}>
          {errors[field.name]?.type === 'required' && field.fieldErrorMessage}
          {errors[field.name]?.type === 'pattern' && 'Invalid field'}
        </p>
      )}
    </div>
  );
};
FormDataLayout.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    fieldErrorMessage: PropTypes.string,
  }).isRequired,
  errors: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};
export default FormDataLayout;
