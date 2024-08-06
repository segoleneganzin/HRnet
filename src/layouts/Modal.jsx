import PropTypes from 'prop-types';

/**
 * Modal Layout
 * use for all forms
 * @param {Object} props
 * @param {boolean} props.isModalOpen
 * @param {function} props.setModalOpen
 * @param {string} props.title
 * @param {string} props.btnText
 * @param {ReactNode} props.children
 * @returns {JSX.Element}
 */
const Modal = ({ isModalOpen, toggleModal, title, btnText, children }) => {
  return (
    <div className='overlay'>
      <div
        className='modal'
        aria-hidden={!isModalOpen}
        role='dialog'
        aria-describedby={`${title ? title : 'modal'}`}
        autoFocus
      >
        <div className='modal__bground'>
          <span className='modal__bground-element'></span>
        </div>
        <div className='modal__body'>
          <div className='modal__body-content'>
            <button
              className='modal__body-close'
              onClick={toggleModal}
              autoFocus
            ></button>
            <h2 className='modal__body-title bold title' id='modalTitle'>
              {title && title}
            </h2>
            <div className='modal__body-children-container'>
              {/* modal content */}
              {children}
            </div>
          </div>
          {/* Button section (e.g., Close, Cancel) */}
          {btnText && (
            <button className='btn btn-cancel' onClick={toggleModal}>
              {btnText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  title: PropTypes.string,
  btnText: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Modal;
