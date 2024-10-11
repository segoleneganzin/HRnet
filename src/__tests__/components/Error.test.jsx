import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Error from '../../components/Error';

describe('<Error>', () => {
  const defaultProps = {
    errorMessage: 'test error',
  };
  it('should render errorMessage correctly', () => {
    render(<Error {...defaultProps} />);
    expect(screen.getByText('test error')).toBeInTheDocument();
  });
});
