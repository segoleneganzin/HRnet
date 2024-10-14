import PropTypes from 'prop-types';

/**
 * SectionLayout component renders a section with content, an optional title, and an optional customizable button.
 *
 * @param {object} props
 * @param {string} props.title - The title to be displayed at the top of the section header.
 * @param {ReactNode} props.buttonComponent - A button component to be displayed in the section header (Floating action button).
 * @param {ReactNode} props.children - The content to be rendered within the section.
 * @returns {JSX.Element}
 */
const SectionLayout = ({ title, buttonComponent, children }) => {
  return (
    <section className='section' data-testid='section'>
      {title && buttonComponent ? (
        <div className='section__header'>
          <h3 className='title section__title'>{title}</h3>
          {buttonComponent}
        </div>
      ) : (
        ''
      )}
      {children}
    </section>
  );
};

SectionLayout.propTypes = {
  title: PropTypes.string.isRequired,
  buttonComponent: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default SectionLayout;
