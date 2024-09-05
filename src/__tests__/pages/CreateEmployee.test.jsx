/* eslint-disable react/prop-types */
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import CreateEmployee from '../../pages/CreateEmployee';
import { Provider } from 'react-redux';
import { createTestStore } from '../testStore';

describe('<CreateEmployee>', () => {
  const store = createTestStore();
  const defaultProps = {};
  // Function to render the component with required setup
  const setup = (props = defaultProps) => {
    return render(
      <MemoryRouter>
        <Provider store={store}>
          <CreateEmployee {...props} />
        </Provider>
      </MemoryRouter>
    );
  };

  it('should render CreateEmployee form and FAB button', () => {
    setup();
    expect(screen.getByText('View employees')).toBeInTheDocument();
    expect(screen.getByText('CREATE EMPLOYEE')).toBeInTheDocument();
    // Check if CreateEmployeeForm is rendered
    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Date of birth')).toBeInTheDocument();
    expect(screen.getByLabelText('Start Date')).toBeInTheDocument();
    expect(screen.getByText('Address')).toBeInTheDocument();
    expect(screen.getByLabelText('Street')).toBeInTheDocument();
    expect(screen.getByLabelText('City')).toBeInTheDocument();
    expect(screen.getByLabelText('State')).toBeInTheDocument();
    expect(screen.getByLabelText('Zip Code')).toBeInTheDocument();
    expect(screen.getByLabelText('Department')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Create' })).toBeInTheDocument();
  });

  it('should render the modal lazily when isModalOpen is true', async () => {
    setup({ initialModalOpen: true });

    // Verify that the fallback content is displayed before the modal is loaded (lazy load)
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Wait for the modal to appear
    await waitFor(() => expect(screen.getByRole('dialog')).toBeInTheDocument());
    expect(screen.getByText('Employee Created !')).toBeInTheDocument();
  });
});
