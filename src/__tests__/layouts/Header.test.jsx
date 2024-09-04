import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Header from '../../layouts/Header';

describe('<Header />', () => {
  it('renders the header correctly', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    // Check that the logo image is in the document
    const logoImage = screen.getByAltText('');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', '/src/assets/img/logo.webp');

    // Check that the main title is present
    expect(screen.getByText(/WEALTH HEALTH/i)).toBeInTheDocument();

    // Check that the subtitle is present
    expect(screen.getByText(/HRnet/i)).toBeInTheDocument();

    // Check that the link leads to the right URL
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/');
  });
});
