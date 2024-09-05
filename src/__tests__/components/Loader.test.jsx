import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Loader from '../../components/Loader';

describe('<Loader>', () => {
  it('should render the loader container with the correct aria-label', () => {
    render(<Loader />);

    // Check if the loader container is in the document
    const loaderContainer = screen.getByTestId('loader');
    expect(loaderContainer).toBeInTheDocument();

    // Check if the loader container has the correct aria-label
    expect(loaderContainer).toHaveAttribute('aria-label', 'Loading');
  });

  it('should render all three loader elements', () => {
    const { container } = render(<Loader />);

    // Check if all three loader elements are in the document
    const loaderElement1 = container.querySelector('.loader__element--1');
    const loaderElement2 = container.querySelector('.loader__element--2');
    const loaderElement3 = container.querySelector('.loader__element--3');

    expect(loaderElement1).toBeInTheDocument();
    expect(loaderElement2).toBeInTheDocument();
    expect(loaderElement3).toBeInTheDocument();
  });
});
