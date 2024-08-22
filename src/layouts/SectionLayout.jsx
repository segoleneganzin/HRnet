import PropTypes from 'prop-types';

const SectionLayout = ({ title, children }) => {
  return (
    <section className='section'>
      {title && <h3 className='title section__title'>{title}</h3>}
      {children}
    </section>
  );
};
SectionLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
export default SectionLayout;
