import PropTypes from 'prop-types';
import Header from '../layouts/Header';
import Footer from './Footer';

/**
 * Application layout.
 * @param {object} props
 * @param {ReactNode} props.children
 * @returns {JSX.Element}
 */
const PageLayout = ({ children, pageTitle, mainClassName = '' }) => {
  document.title = pageTitle;
  return (
    <div>
      <Header />
      <main className={'main ' + mainClassName}>{children}</main>
      <Footer />
    </div>
  );
};
PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
  pageTitle: PropTypes.string,
  mainClassName: PropTypes.string,
};
export default PageLayout;
