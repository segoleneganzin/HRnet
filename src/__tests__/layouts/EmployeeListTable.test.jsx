import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import EmployeeListTable from '../../layouts/EmployeeListTable';
import { Provider } from 'react-redux';
import { createTestStore } from '../testStore';
import { colDefs } from '../../utils/tables/employeesColDefs';

describe('<EmployeeListTable>', () => {
  const store = createTestStore();

  it('should display all column headers from colDefs', () => {
    render(
      <Provider store={store}>
        <EmployeeListTable />
      </Provider>
    );
    // Check if each column header is present in the document
    colDefs.forEach((col) => {
      expect(screen.getByText(col.name)).toBeInTheDocument();
    });
  });
});
