import PropTypes from 'prop-types';
import { useState } from 'react';
import Filter from '../components/Filter';
import magnifierIcon from '../assets/img/magnifier-svgrepo-com.svg';

/**
 * Renders a filter component for the employee table, allowing users to toggle the filter input and clear the filter text.
 *
 * @param {Object} props
 * @param {Function} props.setResetPaginationToggle - Function to reset pagination state.
 * @param {string} props.filterText - The current filter text.
 * @param {Function} props.setFilterText - Function to update the filter text.
 * @returns {JSX.Element}
 *
 * @example
 * <EmployeeTableFilter
 *   setResetPaginationToggle={setResetPaginationToggle}
 *   filterText={filterText}
 *   setFilterText={setFilterText}
 * />
 */
const EmployeeTableFilter = ({
  setResetPaginationToggle,
  filterText,
  setFilterText,
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  /**
   * Toggles the visibility of the filter input and clears the filter text.
   */
  const toggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
    handleClear();
  };

  /**
   * Clears the filter text and resets pagination.
   */
  const handleClear = () => {
    setResetPaginationToggle((prev) => !prev);
    setFilterText('');
  };

  return (
    <div className={`employee-list-table__filter`}>
      {/* Filter input and clear button */}
      {isFilterOpen && (
        <Filter
          onFilter={(e) => setFilterText(e.target.value)}
          onClear={handleClear}
          filterText={filterText}
        />
      )}

      {/* Filter toggle button */}
      <button
        className='employee-list-table__filter-toggle'
        aria-label={isFilterOpen ? `Close filter` : `Open filter`}
        onClick={toggleFilter}
      >
        {isFilterOpen ? (
          <>
            <img src={magnifierIcon} alt='magnifier icon' />
            <span>X</span>
          </>
        ) : (
          <img src={magnifierIcon} alt={`magnifier icon`} />
        )}
      </button>
    </div>
  );
};

EmployeeTableFilter.propTypes = {
  setResetPaginationToggle: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired,
  setFilterText: PropTypes.func.isRequired,
};

export default EmployeeTableFilter;
