import { render, screen } from '@testing-library/react';
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
    expect(screen.getByLabelText('First name')).toBeInTheDocument();
    expect(screen.getByLabelText('Last name')).toBeInTheDocument();
    expect(screen.getByLabelText('Date of birth')).toBeInTheDocument();
    expect(screen.getByLabelText('Start date')).toBeInTheDocument();
    expect(screen.getByText('Address')).toBeInTheDocument();
    expect(screen.getByLabelText('Street')).toBeInTheDocument();
    expect(screen.getByLabelText('City')).toBeInTheDocument();
    expect(screen.getByLabelText('State')).toBeInTheDocument();
    expect(screen.getByLabelText('Zip code')).toBeInTheDocument();
    expect(screen.getByLabelText('Department')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Create employee' })
    ).toBeInTheDocument();
  });

  it('should render the modal when isModalOpen is true', async () => {
    setup({ initialModalOpen: true });
    // Wait for the modal to appear
    expect(screen.getByText('Employee Created !')).toBeInTheDocument();
  });
});
