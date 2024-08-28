import { format } from 'date-fns';

// columns properties to render into EmployeeListTable (AgGridReact)
export const colDefs = [
  {
    accessorKey: 'firstName',
    header: 'First Name',
    size: 120,
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
    size: 120,
  },
  {
    accessorKey: 'startDate',
    header: 'Start Date',
    size: 120,
    Cell: ({ cell }) => format(cell.getValue(), 'MM/dd/yyyy'),
  },
  {
    accessorKey: 'department',
    header: 'Department',
    size: 150,
  },
  {
    accessorKey: 'birth',
    header: 'Date of Birth',
    size: 150,
    Cell: ({ cell }) => format(cell.getValue(), 'MM/dd/yyyy'),
  },
  {
    accessorKey: 'street',
    header: 'Street',
    size: 150,
  },
  {
    accessorKey: 'city',
    header: 'City',
    size: 150,
  },
  {
    accessorKey: 'state',
    header: 'State',
    size: 150,
  },
  {
    accessorKey: 'zipCode',
    header: 'Zip Code',
    size: 150,
  },
];
