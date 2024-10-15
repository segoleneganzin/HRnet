import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CreateEmployeeForm from '../../layouts/CreateEmployeeForm';
import { Provider } from 'react-redux';
import { usStates } from '../../utils/usStates';
import { createTestStore } from '../testStore';

describe('<CreateEmployeeForm>', () => {
  const defaultProps = {
    toggleModal: vi.fn(),
  };

  const store = createTestStore();

  const setup = (props = defaultProps) => {
    return render(
      <Provider store={store}>
        <CreateEmployeeForm {...props} />
      </Provider>
    );
  };

  it('renders all form fields correctly', () => {
    setup();
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

  it('fills and submits the form correctly', async () => {
    setup();

    // Fill in the form fields
    fireEvent.change(screen.getByLabelText('First name'), {
      target: { value: 'John' },
    });
    fireEvent.change(screen.getByLabelText('Last name'), {
      target: { value: 'Doe' },
    });
    fireEvent.change(screen.getByLabelText('Date of birth'), {
      target: { value: '01/01/2000' },
    });
    fireEvent.change(screen.getByLabelText('Start date'), {
      target: { value: '01/01/2024' },
    });
    fireEvent.change(screen.getByLabelText('Street'), {
      target: { value: '123 Main St' },
    });
    fireEvent.change(screen.getByLabelText('City'), {
      target: { value: 'Anytown' },
    });
    fireEvent.change(screen.getByLabelText('State'), {
      target: { value: usStates[0].value },
    });
    fireEvent.change(screen.getByLabelText('Zip code'), {
      target: { value: '12345' },
    });
    fireEvent.change(screen.getByLabelText('Department'), {
      target: { value: 'Sales' },
    });

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: 'Create employee' }));

    await waitFor(() => {
      // Check if dispatch has been called
      expect(store.dispatch).toHaveBeenCalled();
      const dispatchedAction = store.dispatch.mock.calls[0][0];
      expect(dispatchedAction).toHaveProperty('type', 'employees/addEmployee');
      expect(dispatchedAction).toHaveProperty('payload');
      expect(dispatchedAction.payload).toEqual({
        id: expect.any(String),
        firstName: 'John',
        lastName: 'Doe',
        dateOfBirth: '01/01/2000',
        startDate: '01/01/2024',
        street: '123 Main St',
        city: 'Anytown',
        state: usStates[0].value,
        zipCode: '12345',
        department: 'Sales',
      });
      // Check if toggleModal has been called
      expect(defaultProps.toggleModal).toHaveBeenCalled();
    });
  });
});
