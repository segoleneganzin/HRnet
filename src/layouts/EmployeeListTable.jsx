import { useState } from 'react';
import { useSelector } from 'react-redux';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import 'ag-grid-community/styles/ag-grid.css'; // Mandatory CSS required by the Data Grid
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Optional Theme applied to the Data Grid
import {
  selectEmployees,
  selectEmployeesError,
  selectEmployeesStatus,
} from '../features/employeesSlice';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { colDefs } from '../utils/tables/employeesColDefs';

/**
 * Component that displays a table of employees using ag-Grid.
 *
 * It connects to the Redux store to retrieve employee data and handles different
 * states of data fetching (loading, error, and success). It includes a filter
 * input to search through the employee list and supports pagination.
 *
 * @returns {JSX.Element}
 */
const EmployeeListTable = () => {
  const pagination = true;
  const paginationPageSize = 10;
  const paginationPageSizeSelector = [5, 10, 25, 50, 100];

  const [filterText, setFilterText] = useState('');

  // Retrieve data from the Redux store
  const employees = useSelector((state) => selectEmployees(state));
  const employeesStatus = useSelector((state) => selectEmployeesStatus(state));
  const employeesError = useSelector((state) => selectEmployeesError(state));

  /**
   * Updates the filter text state when the input value changes.
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event from the input.
   */
  const onFilterTextChange = (e) => {
    setFilterText(e.target.value);
  };

  // Message to display if no employees in the table (overlayNoRowsTemplate)
  const noRows = `<p>
      No data available in table
    </p>`;

  // Render different UI based on the employees status
  if (employeesStatus === 'loading') {
    return <Loader />;
  }

  if (employeesStatus === 'failed') {
    return <Error errorMessage={employeesError} />;
  }

  return (
    <div className='current-employee__table-container'>
      <input
        id='filter'
        type='text'
        placeholder='Filter...'
        value={filterText}
        onChange={onFilterTextChange}
        className='current-employee__table-filter input'
      />
      <div className='ag-theme-quartz current-employee__table'>
        <AgGridReact
          rowData={employees}
          columnDefs={colDefs}
          domLayout='autoHeight'
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={paginationPageSizeSelector}
          quickFilterText={filterText}
          deltaRowDataMode={true} // Only update changed rows (AgGridReact intern cache)
          overlayNoRowsTemplate={noRows}
        />
      </div>
    </div>
  );
};

export default EmployeeListTable;
