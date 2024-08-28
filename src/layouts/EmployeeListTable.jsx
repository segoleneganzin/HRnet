import { useSelector } from 'react-redux';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import {
  selectEmployees,
  selectEmployeesError,
  selectEmployeesStatus,
} from '../features/employeesSlice';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { colDefs } from '../utils/tables/employeesColDefs';
import { useMemo } from 'react';

/**
 * Component that displays a table of employees using material-react-table (Material UI + TanStack Table).
 * It connects to the Redux store to retrieve employee data and handles different
 * states of data fetching (loading, error, and success). It includes a filter
 * input to search through the employee list and supports pagination.
 *
 * @returns {JSX.Element}
 */
const EmployeeListTable = () => {
  // Retrieve data from the Redux store
  const employees = useSelector((state) => selectEmployees(state));
  const employeesStatus = useSelector((state) => selectEmployeesStatus(state));
  const employeesError = useSelector((state) => selectEmployeesError(state));

  const columns = useMemo(() => colDefs, []);

  const table = useMaterialReactTable({
    columns,
    data: employees,
    enableColumnActions: false,
    enableColumnFilters: false,
    enableHiding: false,
    enableDensityToggle: false,
    enableFullScreenToggle: false,
    enableStickyHeader: true,
    renderEmptyRowsFallback: () => (
      <Error errorMessage={'No employee to display'} />
    ),
    muiPaginationProps: {
      rowsPerPageOptions: [5, 10, 25, 50, 100],
    },
  });

  // Render different UI based on the employees status
  if (employeesStatus === 'loading') {
    return <Loader />;
  }

  if (employeesStatus === 'failed') {
    return <Error errorMessage={employeesError} />;
  }

  return (
    <div className='current-employee__table-container'>
      {/* <ThemeProvider theme={tableTheme}> */}
      <MaterialReactTable table={table} />
      {/* </ThemeProvider> */}
    </div>
  );
};

export default EmployeeListTable;
