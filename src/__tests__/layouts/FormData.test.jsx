// src/__tests__/components/FormData.test.jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FormData from '../../layouts/FormData';

describe('<FormData />', () => {
  const defaultProps = {
    field: { name: 'testField', label: 'Test Field' },
    errors: {},
    children: <input id='testField' name='testField' />,
  };

  const setup = (props = defaultProps) => {
    return render(<FormData {...props} />);
  };

  it('renders the label correctly', () => {
    setup();
    // Check if the label is rendered
    expect(screen.getByLabelText('Test Field')).toBeInTheDocument();
  });

  it('renders the children correctly', () => {
    setup();
    // Check if the children elements are rendered correctly
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('shows error message when there is an error', () => {
    const propsWithError = {
      ...defaultProps,
      errors: { testField: { type: 'required' } },
    };
    setup(propsWithError);
    // Check if the error message for required field is displayed
    expect(screen.getByText('Please enter a test field')).toBeInTheDocument();
  });

  it('shows generic error message for pattern errors', () => {
    const propsWithPatternError = {
      ...defaultProps,
      errors: { testField: { type: 'pattern' } },
    };
    setup(propsWithPatternError);
    // Check if the generic error message for pattern is displayed
    expect(screen.getByText('Invalid field')).toBeInTheDocument();
  });

  it('does not render error message when no error exists', () => {
    setup();
    // Check that no error message is displayed when there is no error
    expect(
      screen.queryByText('Please enter a test field')
    ).not.toBeInTheDocument();
    expect(screen.queryByText('Invalid field')).not.toBeInTheDocument();
  });
});
