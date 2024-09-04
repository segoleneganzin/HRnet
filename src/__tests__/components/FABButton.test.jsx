import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import FABButton from '../../components/FABButton';

describe('<FABButton>', () => {
  const defaultProps = {
    icon: 'icon-url.png',
    text: 'Click Me',
    link: '/some-path',
  };

  const setup = (props = defaultProps) => {
    return render(
      <MemoryRouter>
        <FABButton {...props} />
      </MemoryRouter>
    );
  };

  it('renders the icon correctly', () => {
    setup();
    const iconElement = screen.getByAltText('fab icon');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute('src', 'icon-url.png');
  });

  it('renders the text correctly', () => {
    setup();
    const textElement = screen.getByText('Click Me');
    expect(textElement).toBeInTheDocument();
  });

  it('renders the correct link', () => {
    setup();
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/some-path');
  });

  it('applies the correct classes', () => {
    setup();
    const linkElement = screen.getByRole('link');
    expect(linkElement.className).toBe('fab-btn');

    const iconElement = screen.getByAltText('fab icon');
    expect(iconElement.className).toBe('fab-btn__icon');

    const textElement = screen.getByText('Click Me');
    expect(textElement.className).toBe('fab-btn__text');
  });
});
