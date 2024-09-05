import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Card component for displaying information on the home page.
 *
 * @param {Object} props
 * @param {string} props.icon - The URL of the icon image to display on the card.
 * @param {string} props.title - The title to display on the card.
 * @param {string} props.description - The description text to display on the card.
 * @param {string} props.link - The URL path to navigate to when the link is clicked.
 * @param {string} props.linkText - The text to display for the link.
 * @returns {JSX.Element} The rendered home card component.
 *
 * @example
 * <HomeCard
 *    icon={sampleIcon}
 *    title={'Sample title'}
 *    description={
 *        'lorem ipsum ...'
 *     }
 *    link={'/sample-link'}
 *    linkText={'View sample element'}
 * />
 */
const HomeCard = ({ icon, title, description, link, linkText }) => (
  <article className='home-card'>
    <div className='home-card__icon-bg'>
      <img src={icon} alt={`${title} icon`} className='home-card__icon' />
    </div>

    <h3 className='home-card__title title'>{title}</h3>

    <p className='home-card__description'>{description}</p>

    <Link to={link} className='home-card__link btn bold'>
      {linkText}
    </Link>
  </article>
);

HomeCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};
export default HomeCard;
