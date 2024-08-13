export const colDefs = [
  {
    headerName: 'First Name',
    field: 'firstName',
    minWidth: 120,
    flex: 1,
  },
  {
    headerName: 'Last Name',
    field: 'lastName',
    minWidth: 120,
    flex: 1,
  },
  {
    headerName: 'Start Date',
    field: 'startDate',
    minWidth: 120,
    flex: 1,
    valueFormatter: (p) =>
      new Date(p.value).toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }),
  },
  {
    headerName: 'Department',
    field: 'department',
    minWidth: 120,
    flex: 1,
  },
  {
    headerName: 'Date of Birth',
    field: 'birth',
    flex: 1,
    minWidth: 120,
    valueFormatter: (p) =>
      new Date(p.value).toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }),
  },
  {
    headerName: 'Street',
    field: 'street',
    minWidth: 180,
    maxWidth: 300,
    flex: 1,
  },
  {
    headerName: 'City',
    field: 'city',
    minWidth: 120,
    flex: 1,
  },
  {
    headerName: 'State',
    field: 'state',
    minWidth: 80,
    flex: 1,
  },
  {
    headerName: 'Zip Code',
    field: 'zipCode',
    minWidth: 120,
    flex: 1,
  },
];
