import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Select from '../../components/Select';

describe('<Select>', () => {
  const defaultProps = {
    field: {
      name: 'country',
      isRequired: true,
      defaultValue: 'Choose a country',
      options: [
        { value: 'us', label: 'United States' },
        { value: 'ca', label: 'Canada' },
      ],
    },
    register: vi.fn(),
    fieldErrorClass: vi.fn().mockReturnValue(''),
  };

  const setup = (props = defaultProps) => {
    return render(<Select {...props} />);
  };

  it('renders the select with correct attributes', () => {
    setup();
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeTruthy();
    expect(selectElement).toHaveAttribute('id', 'country');
    expect(selectElement).toHaveAttribute('name', 'country');
    expect(selectElement.className).toBe('select ');
    expect(selectElement).toHaveAttribute('aria-required', 'true');
    expect(selectElement).toHaveAttribute('aria-invalid', 'false');

    // Checks default option
    const defaultOption = screen.getByText('Choose a country');
    expect(defaultOption).toBeTruthy();
    expect(defaultOption).toHaveAttribute('value', '');

    // Checks options
    const optionUS = screen.getByText('United States');
    const optionCA = screen.getByText('Canada');
    expect(optionUS).toBeTruthy();
    expect(optionCA).toBeTruthy();
  });

  it('applies the correct error class if fieldErrorClass returns error', () => {
    const errorProps = {
      ...defaultProps,
      fieldErrorClass: vi.fn().mockReturnValue('field--error'),
    };
    setup(errorProps);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement.className).toBe('select field--error');
    expect(selectElement).toHaveAttribute('aria-invalid', 'true');
  });

  it('calls register with correct arguments', () => {
    setup();
    expect(defaultProps.register).toHaveBeenCalledWith('country', {
      required: true,
    });
  });

  it('renders with the default value when no option is selected', () => {
    setup();
    const selectElement = screen.getByRole('combobox');
    expect(selectElement.value).toBe('');
  });

  it('renders a non-required select when isRequired is false', () => {
    const nonRequiredProps = {
      ...defaultProps,
      field: { ...defaultProps.field, isRequired: false },
    };
    setup(nonRequiredProps);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveAttribute('aria-required', 'false');
  });
});
