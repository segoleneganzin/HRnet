import PropTypes from 'prop-types';

/**
 * SectionLayout component renders a section with content and an optional title.
 *
 * @param {object} props
 * @param {string} [props.title] - The optional title to be displayed at the top of the section.
 * @param {ReactNode} props.children - The content to be rendered within the section.
 * @returns {JSX.Element}
 */
const SectionLayout = ({ title, children }) => (
  <section className='section'>
    {title && <h3 className='title section__title'>{title}</h3>}
    {children}
  </section>
);

SectionLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default SectionLayout;
