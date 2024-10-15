import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectEmployees } from '../features/employeesSlice';
import { colDefs } from '../utils/tables/employeesColDefs';
import DataTable from 'react-data-table-component';
import Filter from '../components/Filter';
import Loader from '../components/Loader';
import { filterEmployees } from '../utils/tables/filter';
import magnifierIcon from '../assets/img/magnifier-svgrepo-com.svg';

/**
 * Component that displays a table of employees using react-data-table-component.
 * It connects to the Redux store to retrieve employee data .
 * It includes a filter input to search through the employee list and supports pagination.
 *
 * @returns {JSX.Element}
 */
const EmployeeListTable = () => {
  // Retrieve data from the Redux store
  const employees = useSelector((state) => selectEmployees(state));

  // Memoize columns definition to avoid unnecessary re-renders
  const columns = useMemo(() => colDefs, []);

  // Local state for filter
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen((prevIsOpen) => !prevIsOpen);
    handleClear();
  };

  // Memoize the filtered data to avoid recalculating on every render
  const filteredEmployees = useMemo(() => {
    return filterEmployees(employees, filterText);
  }, [employees, filterText]);

  const handleClear = () => {
    if (filterText) {
      setResetPaginationToggle(!resetPaginationToggle);
      setFilterText('');
    }
  };

  const customStyles = {
    headRow: {
      style: {
        fontWeight: '700',
        backgroundColor: 'color(tableLight)',
      },
    },
    pagination: {
      style: {
        fontWeight: '700',
        backgroundColor: 'color(tableLight)',
      },
    },
  };

  return (
    <div className='employee-list-table' data-testid='employee-list-table'>
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

      <DataTable
        columns={columns}
        data={filteredEmployees}
        fixedHeader={true}
        pagination={true}
        paginationResetDefaultPage={resetPaginationToggle}
        customStyles={customStyles}
        persistTableHead
        progressComponent={<Loader />}
        noDataComponent={
          <p className='employee-list-table__not-found'>
            No employee to display
          </p>
        }
      />
    </div>
  );
};

export default EmployeeListTable;
