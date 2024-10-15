import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import FAB from '../../components/FAB';

describe('<FAB>', () => {
  const defaultProps = {
    icon: 'icon-url.png',
    text: 'Click Me',
    link: '/some-path',
  };

  const setup = (props = defaultProps) => {
    return render(
      <MemoryRouter>
        <FAB {...props} />
      </MemoryRouter>
    );
  };

  beforeEach(() => setup());

  it('renders the icon correctly', () => {
    const iconElement = screen.getByAltText('Click Me icon');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute('src', 'icon-url.png');
  });

  it('renders the text correctly', () => {
    const textElement = screen.getByText('Click Me');
    expect(textElement).toBeInTheDocument();
  });

  it('renders the correct link', () => {
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/some-path');
  });

  it('applies the correct classes', () => {
    const linkElement = screen.getByRole('link');
    expect(linkElement.className).toBe('fab');

    const iconElement = screen.getByAltText('Click Me icon');
    expect(iconElement.className).toBe('fab__icon');

    const textElement = screen.getByText('Click Me');
    expect(textElement.className).toBe('fab__text');
  });
});
