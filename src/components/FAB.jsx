import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * FAB component renders a Floating Action Button (FAB) with an icon and text.
 * The button navigates to a specified link when clicked.
 *
 * @param {Object} props
 * @param {string} props.icon - The URL of the icon to display inside the button.
 * @param {string} props.text - The text to display next to the icon inside the button.
 * @param {string} props.link - The URL path to navigate to when the button is clicked.
 * @returns {JSX.Element}
 *
 * @example
 * <FAB
 *    icon={sampleIcon}
 *    text={'Click me'}
 *    link='/sample-link'
 * />
 */
const FAB = ({ icon, text, link }) => {
  return (
    <Link className='fab' to={link}>
      <img src={icon} alt={`fab icon`} className='fab__icon' />
      <span className='fab__text'>{text}</span>
    </Link>
  );
};

FAB.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default FAB;
