import { useState, useRef, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import 'ag-grid-community/styles/ag-grid.css'; // Mandatory CSS required by the Data Grid
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Optional Theme applied to the Data Grid
import {
  // getEmployeesAsync,
  selectEmployees,
  selectEmployeesError,
  selectEmployeesStatus,
  selectPreviousEmployees,
  setPreviousEmployees,
} from '../features/employeesSlice';
import Loader from '../components/Loader';
import Error from '../components/Error';

const EmployeeListTable = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => selectEmployees(state));
  const employeesStatus = useSelector((state) => selectEmployeesStatus(state));
  const employeesError = useSelector((state) => selectEmployeesError(state));
  const previousEmployees = useSelector((state) =>
    selectPreviousEmployees(state)
  );

  const gridApiRef = useRef(null);
  const [apiReady, setApiReady] = useState(false);
  const [filterText, setFilterText] = useState('');

  const pagination = true;
  const paginationPageSize = 10;
  const paginationPageSizeSelector = [5, 10, 25, 50, 100];

  const colDefs = [
    { headerName: 'First Name', field: 'firstName' },
    { headerName: 'Last Name', field: 'lastName' },
    {
      headerName: 'Start Date',
      field: 'startDate',
      valueFormatter: (p) =>
        new Date(p.value).toLocaleDateString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }),
    },
    { headerName: 'Department', field: 'department' },
    {
      headerName: 'Date of Birth',
      field: 'birth',
      valueFormatter: (p) =>
        new Date(p.value).toLocaleDateString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }),
    },
    { headerName: 'Street', field: 'street' },
    { headerName: 'City', field: 'city' },
    { headerName: 'State', field: 'state' },
    { headerName: 'Zip Code', field: 'zipCode' },
  ];

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
      const existingRowNodes = [];
      gridApiRef.current.forEachNode((node) => existingRowNodes.push(node));
      const existingEmployeeId = new Set(
        existingRowNodes.map((row) => row.data.id)
      );
      // Determine which rows to add
      const updatedRows = employees.filter(
        (employee) => !existingEmployeeId.has(employee.id)
      );
      console.log('Rows to be Added:', updatedRows);

      if (updatedRows.length > 0) {
        console.log(
          'Updated Row IDs:',
          updatedRows.map((row) => row.id)
        );
        gridApiRef.current.applyTransaction({ add: updatedRows });
        dispatch(setPreviousEmployees());
      }
    }
  }, [employees, apiReady, dispatch]);

  if (employeesStatus === 'loading') {
    return <Loader />;
  }
  if (employeesStatus === 'failed') {
    return <Error errorMessage={employeesError} />;
  }

  return (
    <div>
      <input
        type='text'
        placeholder='Filter...'
        value={filterText}
        onChange={onFilterTextChange}
        className='current-employee__table-filter'
      />
      <div className='ag-theme-quartz current-employee__table'>
        <AgGridReact
          rowData={previousEmployees}
          columnDefs={colDefs}
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={paginationPageSizeSelector}
          quickFilterText={filterText}
          deltaRowDataMode={true} // Only update changed rows
          getRowNodeId={(data) => data.id}
          onGridReady={onGridReady}
        />
      </div>
    </div>
  );
};

export default EmployeeListTable;
