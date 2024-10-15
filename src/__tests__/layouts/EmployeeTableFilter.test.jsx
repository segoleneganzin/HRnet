import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import EmployeeTableFilter from '../../layouts/EmployeeTableFilter'; // Assurez-vous que le chemin d'importation est correct

describe('<EmployeeTableFilter>', () => {
  const mockSetResetPaginationToggle = vi.fn();
  const mockSetFilterText = vi.fn();

  const defaultProps = {
    filterText: 'Test',
    setResetPaginationToggle: mockSetResetPaginationToggle,
    setFilterText: mockSetFilterText,
  };

  const setup = (props = defaultProps) => {
    return render(<EmployeeTableFilter {...props} />);
  };

  beforeEach(() => setup());

  it('renders the filter toggle button', () => {
    const toggleButton = screen.getByRole('button', { name: 'Open filter' });
    expect(toggleButton).toBeInTheDocument();
  });

  it('toggles the filter input when button is clicked', () => {
    const toggleButton = screen.getByRole('button', { name: 'Open filter' });
    fireEvent.click(toggleButton);

    const filterInput = screen.getByRole('textbox');
    expect(filterInput).toBeInTheDocument();

    // Teste le bouton de fermeture du filtre
    const closeButton = screen.getByRole('button', { name: 'Close filter' });
    fireEvent.click(closeButton);
    expect(filterInput).not.toBeInTheDocument();
  });

  it('calls setFilterText on input change', () => {
    const toggleButton = screen.getByRole('button', { name: 'Open filter' });
    fireEvent.click(toggleButton);

    const filterInput = screen.getByRole('textbox');
    fireEvent.change(filterInput, { target: { value: 'New filter' } });
    expect(mockSetFilterText).toHaveBeenCalledWith('New filter');
  });
});
