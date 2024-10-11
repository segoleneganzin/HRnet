import PropTypes from 'prop-types';
import SectionHeader from './SectionHeader';

/**
 * SectionLayout component renders a section with content, an optional title, and an optional customizable button.
 *
 * @param {object} props
 * @param {string} [props.title] - The optional title to be displayed at the top of the section.
 * @param {ReactNode} [props.buttonComponent] - An optional button component to be displayed in the section.
 * @param {ReactNode} props.children - The content to be rendered within the section.
 * @returns {JSX.Element}
 */
const SectionLayout = ({ title, buttonComponent, children }) => (
  <section className='section' data-testid='section'>
    <SectionHeader title={title} buttonComponent={buttonComponent} />
    {children}
  </section>
);

SectionLayout.propTypes = {
  title: PropTypes.string,
  buttonComponent: PropTypes.node,
  children: PropTypes.node.isRequired,
};

export default SectionLayout;
