import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createTestStore } from './testStore';
import Router from '../Router';

// Mock lazy-loaded components
vi.mock('../pages/Home', () => ({
  default: () => <div data-testid='home'>Home Page</div>,
}));
vi.mock('../pages/CreateEmployee', () => ({
  default: () => <div data-testid='create-employee'>Create Employee Page</div>,
}));
vi.mock('../pages/EmployeeList', () => ({
  default: () => <div data-testid='employee-list'>Employee List Page</div>,
}));

describe('<Router>', () => {
  const store = createTestStore();

  // Function to render the component with required setup
  const setup = (route) => {
    return render(
      <MemoryRouter initialEntries={[route]}>
        <Provider store={store}>
          <Router />
        </Provider>
      </MemoryRouter>
    );
  };

  it('should render Home component for the root route', async () => {
    setup('/');

    // Check if the Home component is rendered
    await waitFor(() => expect(screen.getByTestId('home')).toBeInTheDocument());
  });

  it('should render CreateEmployee component for the /create-employee route', async () => {
    setup('/create-employee');

    // Verify that the Loader is displayed before the lazy-loaded component
    expect(screen.getByTestId('loader')).toBeInTheDocument();

    // Check if the CreateEmployee component is rendered
    await waitFor(() =>
      expect(screen.getByTestId('create-employee')).toBeInTheDocument()
    );
  });

  it('should render EmployeeList component for the /employee-list route', async () => {
    setup('/employee-list');

    // Verify that the Loader is displayed before the lazy-loaded component
    expect(screen.getByTestId('loader')).toBeInTheDocument();

    // Check if the EmployeeList component is rendered
    await waitFor(() =>
      expect(screen.getByTestId('employee-list')).toBeInTheDocument()
    );
  });

  it('should render Home component for unknown routes', async () => {
    setup('/unknown');

    // Check if the Home component is rendered for unknown routes
    await waitFor(() => expect(screen.getByTestId('home')).toBeInTheDocument());
  });
});
