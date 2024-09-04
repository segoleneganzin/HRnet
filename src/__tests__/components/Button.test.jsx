import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from '../../components/Button';

describe('<Button>', () => {
  const defaultProps = {
    text: 'OK',
  };

  const setup = (props = defaultProps) => {
    return render(<Button {...props} />);
  };

  it('should render text correctly', () => {
    setup();
    expect(screen.getByText('OK')).toBeInTheDocument();
  });
  it('renders the button without additional className if no provided', () => {
    setup();
    const buttonElement = screen.getByRole('button');
    // Checks that the additional class is not applied
    expect(buttonElement.className).toBe('btn');
  });
  it('has no onClick handler if no provided', () => {
    setup();
    const buttonElement = screen.getByRole('button');
    // Checks that the onClick function is null
    expect(buttonElement.onclick).toBeNull();
  });
  it('calls handleOnClick when the button is clicked', () => {
    const props = {
      ...defaultProps,
      handleOnClick: vi.fn(),
    };
    setup(props);
    // Click on the button
    fireEvent.click(screen.getByRole('button'));
    // Checks that the handleOnClick function has been called
    expect(props.handleOnClick).toHaveBeenCalled();
  });
  it('applies the correct class when className is provided', () => {
    const props = {
      ...defaultProps,
      className: 'test',
    };
    setup(props);
    // Checks that the additional class is applied
    const buttonElement = screen.getByRole('button');
    expect(buttonElement.className).toBe('btn test');
  });
});
