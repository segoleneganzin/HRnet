import PropTypes from 'prop-types';

const Input = ({ label, name, type = 'text' }) => {
  return (
    <div className='form-data--input'>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} name={name}></input>
    </div>
  );
};
Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
