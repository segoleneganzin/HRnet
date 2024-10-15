import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FormField from '../../components/FormField';

describe('<FormField>', () => {
  const defaultProps = {
    field: { name: 'testField', label: 'Test Field' },
    register: vi.fn(),
    fieldErrorClass: vi.fn().mockReturnValue(''),
    errors: {},
  };

  const setup = (props = defaultProps) => {
    return render(<FormField {...props} />);
  };

  it('renders a text input field with label', () => {
    setup();

    expect(screen.getByLabelText(/Test Field/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders a select field with label', () => {
    const field = {
      name: 'department',
      label: 'Department',
      type: 'select',
      defaultValue: 'Choose a department',
      options: [
        { value: 'HR', label: 'Human Resources' },
        { value: 'IT', label: 'Information Technology' },
      ],
    };
    const props = {
      ...defaultProps,
      field: field,
    };
    setup(props);

    expect(screen.getByLabelText(/Department/i)).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByText(/Choose a department/i)).toBeInTheDocument();
    expect(screen.getByText(/Human Resources/i)).toBeInTheDocument();
    expect(screen.getByText(/Information Technology/i)).toBeInTheDocument();
  });
});
