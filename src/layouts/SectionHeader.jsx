import PropTypes from 'prop-types';

/**
 * SectionHeader component renders the header of the section.
 *
 * @param {object} props
 * @param {string} props.title - The title to be displayed at the top of the section.
 * @param {ReactNode} props.buttonComponent - An optional button component to be displayed in the section.
 * @returns {JSX.Element|null} - Returns a header element or null if both are missing.
 */
const SectionHeader = ({ title, buttonComponent }) => {
  if (!title && !buttonComponent) return null;

  return (
    <div className='section__header'>
      {title && <h3 className='title section__title'>{title}</h3>}
      {buttonComponent}
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string,
  buttonComponent: PropTypes.node,
};

export default SectionHeader;
