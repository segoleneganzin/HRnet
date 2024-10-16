/**
 * Loader component
 * Three point with alternate size animation
 * @returns {JSX.Element}
 */
const Loader = () => (
  <div className='loader' aria-label='Loading' data-testid='loader'>
    <span className='loader__element loader__element--1'></span>
    <span className='loader__element loader__element--2'></span>
    <span className='loader__element loader__element--3'></span>
  </div>
);

export default Loader;
