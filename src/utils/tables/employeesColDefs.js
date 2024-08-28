import { format } from 'date-fns';

// columns properties to render into EmployeeListTable (MaterialReactTable )
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
    size: 100,
    accessorFn: (row) => format(new Date(row.startDate), 'MM/dd/yyyy'),
    Cell: ({ cell }) => format(cell.getValue(), 'MM/dd/yyyy'),
    filterFn: 'includesString',
  },
  {
    accessorKey: 'department',
    header: 'Department',
    size: 120,
  },
  {
    accessorKey: 'birth',
    header: 'Date of Birth',
    size: 100,
    accessorFn: (row) => format(new Date(row.birth), 'MM/dd/yyyy'),
    Cell: ({ cell }) => format(cell.getValue(), 'MM/dd/yyyy'),
    filterFn: 'includesString',
  },
  {
    accessorKey: 'street',
    header: 'Street',
    size: 200,
  },
  {
    accessorKey: 'city',
    header: 'City',
    size: 150,
  },
  {
    accessorKey: 'state',
    header: 'State',
    size: 50,
  },
  {
    accessorKey: 'zipCode',
    header: 'Zip Code',
    size: 150,
  },
];
