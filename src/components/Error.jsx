import PropTypes from 'prop-types';

/**
 * Reusable error component.
 *
 * @param {Object} props
 * @param {string} [props.errorMessage='An error occurred'] - The error message to display.
 * @param {string} [props.className] - Optional additional CSS classes for styling.
 * @returns {JSX.Element}
 *
 * @example
 * <Error
 *   errorMessage={'No data found'}
 * />
 */
const Error = ({ errorMessage = 'An error occurred', className = '' }) => (
  <p className={`error__message ${className}`} data-testid='error'>
    {errorMessage}
  </p>
);

Error.propTypes = {
  errorMessage: PropTypes.string,
  className: PropTypes.string,
};
export default Error;
