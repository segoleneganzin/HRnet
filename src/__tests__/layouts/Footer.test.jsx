import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from '../../layouts/Footer';

describe('<Footer />', () => {
  it('renders the header correctly', () => {
    render(<Footer />);
    // Check that text are presents
    expect(
      screen.getByText('© 2024 Wealth Health. All rights reserved.')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Contact us: info@wealth-health.com')
    ).toBeInTheDocument();
  });
});
