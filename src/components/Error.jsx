import PropTypes from 'prop-types';

/**
 * Reusable error component.
 *
 * @param {Object} props
 * @param {string} props.errorMessage
 * @returns {JSX.Element}
 */
const Error = ({ errorMessage }) => {
  return <p className='error-message'>{errorMessage}</p>;
};
Error.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};
export default Error;
