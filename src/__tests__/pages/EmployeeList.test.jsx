import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import EmployeeList from '../../pages/EmployeeList';
import { Provider } from 'react-redux';
import { createTestStore } from '../testStore';
import { colDefs } from '../../utils/tables/employeesColDefs';

describe('<EmployeeList>', () => {
  const store = createTestStore();

  // Function to render the component with required setup
  const setup = () => {
    return render(
      <MemoryRouter>
        <Provider store={store}>
          <EmployeeList />
        </Provider>
      </MemoryRouter>
    );
  };

  beforeEach(() => setup());

  it('should render EmployeeList table and FAB button', () => {
    expect(screen.getByText('Add employee')).toBeInTheDocument();
    expect(screen.getByText('CURRENT EMPLOYEES')).toBeInTheDocument();
    // Check if each column header of EmployeeListTable is present in the document
    colDefs.forEach((col) => {
      expect(screen.getByText(col.name)).toBeInTheDocument();
    });
  });
});
