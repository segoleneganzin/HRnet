import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HomeCard = ({ icon, title, description, link, linkText }) => {
  return (
    <article className='home-card'>
      <img src={icon} alt={`${title} icon`} className='home-card__icon' />
      <h3 className='home-card__title title'>{title}</h3>
      <p className='home-card__description'>{description}</p>
      <Link to={link} className='home-card__link btn bold'>
        {linkText}
      </Link>
    </article>
  );
};
HomeCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};
export default HomeCard;
