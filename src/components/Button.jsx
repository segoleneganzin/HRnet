import PropTypes from 'prop-types';

/**
 * Reusable button component.
 *
 * @param {Object} props
 * @param {string} props.text - The text to display on the button.
 * @param {string} [props.className] - Optional additional CSS classes to apply to the button.
 * @param {function} [props.handleOnClick] - Optional click handler pur function to execute when the button is clicked.
 * @returns {JSX.Element}
 *
 * @example
 * <Button
 *   text={'Click me'}
 *   className={'test'}
 *   handleOnClick={handleOnClick}
 * />
 */
const Button = ({ text, className = '', handleOnClick = () => {} }) => (
  <button
    className={`btn ${className}`}
    onClick={handleOnClick}
    aria-label={text}
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
