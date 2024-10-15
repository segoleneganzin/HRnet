import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Home from '../../pages/Home';
import { Provider } from 'react-redux';
import { createTestStore } from '../testStore';

describe('<Home>', () => {
  const store = createTestStore();

  // Function to render the component with required setup
  const setup = () => {
    return render(
      <MemoryRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </MemoryRouter>
    );
  };

  beforeEach(() => setup());

  it('should render Home cards', () => {
    expect(screen.getByText('CREATE EMPLOYEE')).toBeInTheDocument();
    expect(screen.getByText('CURRENT EMPLOYEES')).toBeInTheDocument();
    const linkElementView = screen.getByRole('button', {
      name: 'View employees',
    });
    expect(linkElementView).toBeInTheDocument();
    const linkElementCreate = screen.getByRole('button', {
      name: 'Create employee',
    });
    expect(linkElementCreate).toBeInTheDocument();
  });
});
