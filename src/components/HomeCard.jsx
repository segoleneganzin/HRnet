import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HomeCard = ({ link, linkText }) => {
  return (
    <Link to={link} className='home-card__link'>
      {linkText}
    </Link>
  );
};
HomeCard.propTypes = {
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};
export default HomeCard;
