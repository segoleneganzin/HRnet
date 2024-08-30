import PropTypes from 'prop-types';

/**
 * SectionLayout component renders a section with content, an optional title, and an optional customizable button.
 *
 * @param {object} props
 * @param {string} [props.title] - The optional title to be displayed at the top of the section.
 * @param {ReactNode} props.children - The content to be rendered within the section.
 * @param {ReactNode} [props.buttonComponent] - An optional button component to be displayed in the section.
 * @returns {JSX.Element}
 */
const SectionLayout = ({ title, buttonComponent, children }) => (
  <section className='section'>
    <div className='section__header'>
      {title && <h3 className='title section__title'>{title}</h3>}
      {buttonComponent && buttonComponent}
    </div>
    {children}
  </section>
);

SectionLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  buttonComponent: PropTypes.node,
};

export default SectionLayout;
