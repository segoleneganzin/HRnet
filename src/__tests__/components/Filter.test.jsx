import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Filter from '../../components/Filter';

describe('<Filter>', () => {
  const mockOnFilter = vi.fn();
  const mockOnClear = vi.fn();

  const defaultProps = {
    filterText: 'Test',
    onFilter: mockOnFilter,
    onClear: mockOnClear,
  };

  const setup = (props = defaultProps) => {
    return render(<Filter {...props} />);
  };

  //   beforeEach(() => setup());

  it('renders the filter input and clear button', () => {
    setup();
    const input = screen.getByRole('textbox', { name: 'Filter Input' });
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('Test');

    const clearButton = screen.getByRole('button', { name: 'Clear filter' });
    expect(clearButton).toBeInTheDocument();
  });

  it('calls onFilter when the input value changes', () => {
    setup();
    const input = screen.getByRole('textbox', { name: 'Filter Input' });
    fireEvent.change(input, { target: { value: 'New Value' } });
    expect(mockOnFilter).toHaveBeenCalledTimes(1);
  });

  it('calls onClear when the clear button is clicked', () => {
    setup();
    const clearButton = screen.getByRole('button', { name: 'Clear filter' });
    fireEvent.click(clearButton);
    expect(mockOnClear).toHaveBeenCalledTimes(1);
  });

  it('does not render the clear button when filterText is empty', () => {
    const props = {
      ...defaultProps,
      filterText: '',
    };
    setup(props);

    const clearButton = screen.queryByRole('button', { name: 'Clear filter' });
    expect(clearButton).not.toBeInTheDocument();
  });

  it('clears the filter text when the clear button is clicked', () => {
    setup();
    const clearButton = screen.getByRole('button', { name: 'Clear filter' });
    fireEvent.click(clearButton);
    expect(mockOnClear).toHaveBeenCalled(1);
  });
});
