import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Input from '../../components/Input';

describe('<Input>', () => {
  const defaultProps = {
    field: {
      name: 'email',
      type: 'email',
      isRequired: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    register: vi.fn(),
    fieldErrorClass: vi.fn().mockReturnValue(''),
  };

  const setup = (props = defaultProps) => {
    return render(<Input {...props} />);
  };

  it('renders the input with correct attributes', () => {
    setup();
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'email');
    expect(inputElement).toHaveAttribute('id', 'email');
    expect(inputElement).toHaveAttribute('name', 'email');
    expect(inputElement.className).toBe('input ');
    expect(inputElement).toHaveAttribute('aria-required', 'true');
    expect(inputElement).toHaveAttribute('aria-invalid', 'false');
  });

  it('applies the correct error class if fieldErrorClass returns error', () => {
    const errorProps = {
      ...defaultProps,
      fieldErrorClass: vi.fn().mockReturnValue('field--error'),
    };
    setup(errorProps);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement.className).toBe('input field--error');
    expect(inputElement).toHaveAttribute('aria-invalid', 'true');
  });

  it('calls register with correct arguments', () => {
    setup();
    expect(defaultProps.register).toHaveBeenCalledWith('email', {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    });
  });

  it('renders a non-required input when isRequired is false', () => {
    const nonRequiredProps = {
      ...defaultProps,
      field: { ...defaultProps.field, isRequired: false },
    };
    setup(nonRequiredProps);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveAttribute('aria-required', 'false');
  });
});
