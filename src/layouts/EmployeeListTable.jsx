// import { lazy, Suspense } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectEmployees,
  selectEmployeesError,
  selectEmployeesStatus,
} from '../features/employeesSlice';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { colDefs } from '../utils/tables/employeesColDefs';
import { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';

// const AgGridReact = lazy(() =>
//   import('ag-grid-react').then((module) => ({ default: module.AgGridReact }))
// );

// constants for table
const PAGINATION_PAGE_SIZE = 10;
const PAGINATION_PAGE_SIZE_SELECTOR = [5, 10, 25, 50, 100];

const NO_ROWS_MESSAGE = `<p>No data available in table</p>`; // Message to display if no employees in the table (overlayNoRowsTemplate)

/**
 * Component that displays a table of employees using ag-Grid.
 * It connects to the Redux store to retrieve employee data and handles different
 * states of data fetching (loading, error, and success). It includes a filter
 * input to search through the employee list and supports pagination.
 *
 * @returns {JSX.Element}
 */
const EmployeeListTable = () => {
  const [filterText, setFilterText] = useState('');

  // Retrieve data from the Redux store
  const employees = useSelector((state) => selectEmployees(state));
  const employeesStatus = useSelector((state) => selectEmployeesStatus(state));
  const employeesError = useSelector((state) => selectEmployeesError(state));

  const columns = useMemo(() => colDefs, []);

  /**
   * Updates the filter text state when the input value changes.
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event from the input.
   */
  const onFilterTextChange = (e) => {
    setFilterText(e.target.value);
  };

  // Render different UI based on the employees status
  if (employeesStatus === 'loading') {
    return <Loader />;
  }

  if (employeesStatus === 'failed') {
    return <Error errorMessage={employeesError} />;
  }

  return (
    <div className='current-employee__table-container'>
      <label htmlFor='filter' className='visually-hidden'>
        Table filter
      </label>
      <input
        id='filter'
        name='filter'
        type='text'
        placeholder='Filter...'
        value={filterText}
        onChange={onFilterTextChange}
        className='current-employee__table-filter input'
      />
      <div className='ag-theme-quartz current-employee__table'>
        {/* <Suspense fallback={<div>Loading table ...</div>}> */}
        <AgGridReact
          rowData={employees}
          columnDefs={columns}
          domLayout='autoHeight'
          pagination
          paginationPageSize={PAGINATION_PAGE_SIZE}
          paginationPageSizeSelector={PAGINATION_PAGE_SIZE_SELECTOR}
          quickFilterText={filterText}
          deltaRowDataMode // Only update changed rows (AgGridReact intern cache)
          overlayNoRowsTemplate={NO_ROWS_MESSAGE}
        />
        {/* </Suspense> */}
      </div>
    </div>
  );
};

export default EmployeeListTable;
