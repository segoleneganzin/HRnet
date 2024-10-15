import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectEmployees } from '../features/employeesSlice';
import { colDefs } from '../utils/tables/employeesColDefs';
import DataTable from 'react-data-table-component';
import Loader from '../components/Loader';
import { filterEmployees } from '../utils/tables/filter';
import EmployeeTableFilter from './EmployeeTableFilter';

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
  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  // Memoize the filtered data to avoid recalculating on every render
  const filteredEmployees = useMemo(() => {
    return filterEmployees(employees, filterText);
  }, [employees, filterText]);

  const customStyles = {
    headRow: {
      style: {
        fontWeight: '700',
        backgroundColor: '#f7f6f6',
      },
    },

    pagination: {
      style: {
        fontWeight: '700',
        backgroundColor: '#f7f6f6',
      },
    },
  };

  return (
    <div className='employee-list-table' data-testid='employee-list-table'>
      <EmployeeTableFilter
        setResetPaginationToggle={setResetPaginationToggle}
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <DataTable
        columns={columns}
        data={filteredEmployees}
        fixedHeader={true}
        pagination={true}
        paginationRowsPerPageOptions={[10, 25, 50, 100]}
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
