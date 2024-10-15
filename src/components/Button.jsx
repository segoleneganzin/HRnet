import PropTypes from 'prop-types';

/**
 * Reusable button component.
 *
 * @param {Object} props
 * @param {string} props.content - The text or svg to display on the button.
 * @param {string} [props.className] - Optional additional CSS classes to apply to the button.
 * @param {function} [props.handleOnClick] - Optional click handler pur function to execute when the button is clicked.
 * @param {string} [props.ariaLabel] - Optional aria-label
 * @returns {JSX.Element}
 *
 * @example
 * <Button
 *   content={'Click me'}
 *   className={'test'}
 *   handleOnClick={handleOnClick}
 * />
 */
const Button = ({
  content,
  className = '',
  handleOnClick = () => {},
  ariaLabel,
}) => (
  <button
    className={`btn ${className}`}
    onClick={handleOnClick}
    aria-label={ariaLabel || content}
  >
    {content}
  </button>
);

Button.propTypes = {
  content: PropTypes.node.isRequired,
  className: PropTypes.string,
  handleOnClick: PropTypes.func,
  ariaLabel: PropTypes.string,
};
export default Button;
