import PropTypes from 'prop-types';

/**
 * Reusable error component.
 *
 * @param {Object} props
 * @param {string} props.errorMessage
 * @returns {JSX.Element}
 *
 * @example
 * <Error
 *   errorMessage={'No data found'}
 * />
 */
const Error = ({ errorMessage }) => {
  return (
    <p className='error-message' data-testid='error'>
      {errorMessage}
    </p>
  );
};
Error.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};
export default Error;
