import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../layouts/Header';
import Footer from './Footer';

/**
 * PageLayout component renders a page layout with a header, a main content area, and a footer.
 * It also sets the document title based on the provided `pageTitle`.
 *
 * @param {object} props
 * @param {ReactNode} props.children - The content to be rendered within the main content area.
 * @param {string} [props.pageTitle='Wealth Health - HRnet'] - The title to be set for the document. Defaults to `Wealth Health - HRnet`.
 * @param {string} [props.mainClassName=''] - Additional CSS class names to be applied to the main content area.
 * @param {string} [props.dataTestId=''] - Props to manage tests
 * @returns {JSX.Element}
 */
const PageLayout = ({
  children,
  pageTitle = 'Wealth Health - HRnet',
  mainClassName = '',
  dataTestId = '',
}) => {
  document.title = pageTitle;

  return (
    <div data-testid={dataTestId}>
      <Header />

      <main className={`main ${mainClassName}`}>{children}</main>

      <Footer />
    </div>
  );
};
PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string,
  mainClassName: PropTypes.string,
  dataTestId: PropTypes.string,
};
export default PageLayout;
