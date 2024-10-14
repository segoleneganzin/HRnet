import { lazy, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { selectEmployees } from '../features/employeesSlice';
import Error from '../components/Error';
import { colDefs } from '../utils/tables/employeesColDefs';
import Loader from '../components/Loader';

/**
 * Component that displays a table of employees using material-react-table (Material UI + TanStack Table).
 * It connects to the Redux store to retrieve employee data . It includes a filter
 * input to search through the employee list and supports pagination.
 *
 * @returns {JSX.Element}
 */
const EmployeeListTable = () => {
  // Retrieve data from the Redux store
  const employees = useSelector((state) => selectEmployees(state));

  // Memoize columns definition
  const columns = useMemo(() => colDefs, []);

  // Memoize table configuration
  const table = useMaterialReactTable({
    columns,
    data: employees,
    enableColumnActions: false,
    enableColumnFilters: false,
    enableHiding: false,
    enableDensityToggle: false,
    enableFullScreenToggle: false,
    enableStickyHeader: true,
    globalFilterFn: 'contains',
    renderEmptyRowsFallback: () => (
      <Error
        errorMessage={'No employee to display'}
        className='employee-list-table__not-found'
      />
    ),
    muiPaginationProps: {
      rowsPerPageOptions: [5, 10, 25, 50, 100],
    },
  });

  return (
    <div className='employee-list-table' data-testid='employee-list-table'>
      <Suspense fallback={<Loader />}>
        <MaterialReactTable table={table} />
      </Suspense>
    </div>
  );
};

export default EmployeeListTable;
