import PropTypes from 'prop-types';

const Button = ({ text, className, handleOnClick }) => {
  return (
    <button className={`btn ${className}`} onClick={handleOnClick}>
      {text}
    </button>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  handleOnClick: PropTypes.func,
};
export default Button;
