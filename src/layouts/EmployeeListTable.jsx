import { useState, useRef, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import 'ag-grid-community/styles/ag-grid.css'; // Mandatory CSS required by the Data Grid
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Optional Theme applied to the Data Grid
import {
  selectEmployees,
  selectEmployeesError,
  selectEmployeesStatus,
  selectPreviousEmployees,
  updatePreviousEmployees,
} from '../features/employeesSlice';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { colDefs } from '../utils/tables/employeesColDefs';

const EmployeeListTable = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => selectEmployees(state));
  const employeesStatus = useSelector((state) => selectEmployeesStatus(state));
  const employeesError = useSelector((state) => selectEmployeesError(state));
  const employeesTable = useSelector((state) => selectPreviousEmployees(state));

  const gridApiRef = useRef(null);
  const [apiReady, setApiReady] = useState(false);
  const [filterText, setFilterText] = useState('');

  const pagination = true;
  const paginationPageSize = 10;
  const paginationPageSizeSelector = [5, 10, 25, 50, 100];

  const onFilterTextChange = (e) => {
    setFilterText(e.target.value);
  };

  // Memoize onGridReady callback to avoid recreating the function on every render
  const onGridReady = useCallback((params) => {
    gridApiRef.current = params.api;
    setApiReady(true);
  }, []);

  useEffect(() => {
    if (apiReady && gridApiRef.current) {
      // Get all existing row nodes
      // Table contains previous employees (employees already in table) and then we compare with employees to view if there are new entries to load
      const existingRowNodes = [];
      gridApiRef.current.forEachNode((node) => existingRowNodes.push(node));
      const existingEmployeeId = new Set(
        existingRowNodes.map((row) => row.data.id)
      );
      // Determine which rows to add (employees not in table)
      const updatedRows = employees.filter(
        (employee) => !existingEmployeeId.has(employee.id)
      );

      if (updatedRows.length > 0) {
        console.log(
          'Updated Row IDs:',
          updatedRows.map((row) => row.id)
        );
        gridApiRef.current.applyTransaction({ add: updatedRows }); // add rows
        dispatch(updatePreviousEmployees());
      }
    }
  }, [employees, apiReady, dispatch]);

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
          rowData={employeesTable}
          columnDefs={colDefs}
          domLayout='autoHeight'
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={paginationPageSizeSelector}
          quickFilterText={filterText}
          deltaRowDataMode={true} // Only update changed rows
          getRowNodeId={(data) => data.id}
          onGridReady={onGridReady}
          overlayNoRowsTemplate={noRows}
        />
      </div>
    </div>
  );
};

export default EmployeeListTable;
