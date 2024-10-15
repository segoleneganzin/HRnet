import PropTypes from 'prop-types';

/**
 * Filter component that displays a text input for filtering data
 * and a clear button to reset the filter.
 *
 * @param {Object} props - The component props.
 * @param {string} props.filterText - The current value of the filter input.
 * @param {function} props.onFilter - Callback function triggered when the input value changes.
 * @param {function} props.onClear - Callback function triggered when the clear button is clicked.
 * @param {string} [props.className] - Optional additional class names for the input element.
 *
 * @returns {JSX.Element} The Filter component.
 */
const Filter = ({ filterText, onFilter, onClear }) => (
  <div className='filter'>
    <label htmlFor='filter' className='filter__label'>
      Search :
    </label>
    <input
      type='text'
      id='filter'
      name='filter'
      aria-label='Filter Input'
      value={filterText}
      onChange={onFilter}
      className='input filter__input'
    />
    {filterText && (
      <button
        className='filter__clear-btn'
        aria-label='Clear filter'
        onClick={onClear}
      >
        X
      </button>
    )}
  </div>
);

Filter.propTypes = {
  filterText: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Filter;
