import PropTypes from 'prop-types';

/**
 * Reusable button component.
 *
 * @param {Object} props
 * @param {string} props.text - The text to display on the button.
 * @param {string} [props.className] - Optional additional CSS classes to apply to the button.
 * @param {function} [props.handleOnClick] - Optional click handler function to execute when the button is clicked.
 * @returns {JSX.Element}
 */
const Button = ({ text, className, handleOnClick }) => (
  <button
    className={className ? `btn ${className}` : 'btn'}
    onClick={handleOnClick}
  >
    {text}
  </button>
);
Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  handleOnClick: PropTypes.func,
};
export default Button;
