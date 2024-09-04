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
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date of birth/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Start Date/i)).toBeInTheDocument();
    expect(screen.getByText(/Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Street/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/City/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/State/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Zip Code/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Department/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Create/i })).toBeInTheDocument();
  });

  it('fills and submits the form correctly', async () => {
    setup();

    // Fill in the form fields
    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: 'John' },
    });
    fireEvent.change(screen.getByLabelText(/Last Name/i), {
      target: { value: 'Doe' },
    });
    fireEvent.change(screen.getByLabelText(/Date of birth/i), {
      target: { value: '01/01/2000' },
    });
    fireEvent.change(screen.getByLabelText(/Start Date/i), {
      target: { value: '01/01/2024' },
    });
    fireEvent.change(screen.getByLabelText(/Street/i), {
      target: { value: '123 Main St' },
    });
    fireEvent.change(screen.getByLabelText(/City/i), {
      target: { value: 'Anytown' },
    });
    fireEvent.change(screen.getByLabelText(/State/i), {
      target: { value: usStates[0].value },
    });
    fireEvent.change(screen.getByLabelText(/Zip Code/i), {
      target: { value: '12345' },
    });
    fireEvent.change(screen.getByLabelText(/Department/i), {
      target: { value: 'Sales' },
    });

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /Create/i }));

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
