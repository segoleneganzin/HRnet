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

const EmployeeListTable = () => {
  const employees = useSelector((state) => selectEmployees(state));
  const employeesStatus = useSelector((state) => selectEmployeesStatus(state));
  const employeesError = useSelector((state) => selectEmployeesError(state));

  const [filterText, setFilterText] = useState('');

  const pagination = true;
  const paginationPageSize = 10;
  const paginationPageSizeSelector = [5, 10, 25, 50, 100];

  const onFilterTextChange = (e) => {
    setFilterText(e.target.value);
  };

  const noRows = `<p>
      No data available in table
    </p>`;

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
