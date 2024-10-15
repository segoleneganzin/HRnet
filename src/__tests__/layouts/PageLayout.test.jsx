import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import PageLayout from '../../layouts/PageLayout';

// Mock Header and Footer components
vi.mock('../../layouts/Header', () => ({
  __esModule: true,
  default: () => <div>Header Component</div>,
}));

vi.mock('../../layouts/Footer', () => ({
  __esModule: true,
  default: () => <div>Footer Component</div>,
}));

describe('<PageLayout>', () => {
  const defaultProps = {};

  const setup = (props = defaultProps) => {
    return render(
      <PageLayout {...props}>
        <div>Content</div>
      </PageLayout>
    );
  };
  it('renders Header and Footer components', () => {
    setup();
    // Verify Header and Footer are rendered
    expect(screen.getByText('Header Component')).toBeInTheDocument();
    expect(screen.getByText('Footer Component')).toBeInTheDocument();
  });

  it('sets the document title based on pageTitle prop', () => {
    setup({ pageTitle: 'Test Page Title' });
    // Check if document.title is set correctly
    expect(document.title).toBe('Test Page Title');
  });

  it('renders children inside the main content area', () => {
    setup();
    // Check if children are rendered correctly
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('applies additional CSS class names to the main content area', () => {
    setup({ mainClassName: 'extra-class' });
    // Check if additional CSS classes are applied
    const mainElement = screen.getByRole('main');
    expect(mainElement).toHaveClass('main');
    expect(mainElement).toHaveClass('extra-class');
  });

  it('uses default pageTitle if none is provided', () => {
    setup();
    // Check if document.title uses default value
    expect(document.title).toBe('Wealth Health - HRnet');
  });
});
