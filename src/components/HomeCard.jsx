import PropTypes from 'prop-types';
import Button from './Button';
import { useNavigate } from 'react-router-dom/dist';

/**
 * Card component for displaying information on the home page.
 *
 * @param {Object} props
 * @param {string} props.icon - The SVG component to display on the card.
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
const HomeCard = ({ icon, title, description, link, linkText }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <article className='home-card'>
      <div className='home-card__icon-bg'>
        <img src={icon} alt={`${title} icon`} className='home-card__icon' />
      </div>

      <h3 className='home-card__title title'>{title}</h3>

      <p className='home-card__description'>{description}</p>

      <Button
        handleOnClick={handleClick}
        className='home-card__btn bold'
        text={linkText}
      />
    </article>
  );
};

HomeCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};
export default HomeCard;
