import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SectionLayout from '../../layouts/SectionLayout';

describe('<SectionLayout>', () => {
  const defaultProps = {};
  const setup = (props = defaultProps) => {
    return render(
      <SectionLayout {...props}>
        <div>Content</div>
      </SectionLayout>
    );
  };

  it('renders the title if provided', () => {
    setup({ title: 'Test Title' });
    // Check if title is rendered
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('does not render a title if not provided', () => {
    const ButtonComponent = <button>Click Me</button>;
    setup({ buttonComponent: ButtonComponent });
    // Check if title is not rendered
    expect(screen.queryByRole('heading', { level: 3 })).not.toBeInTheDocument();
  });

  it('renders the button component if provided', () => {
    const ButtonComponent = <button>Click Me</button>;
    setup({ buttonComponent: ButtonComponent });
    // Check if button component is rendered
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('does not render a button component if not provided', () => {
    setup({ title: 'Test Title' });
    // Check if title is rendered
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    // Check if button component is not rendered
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('does not render a section header if neither title and button are provided', () => {
    setup();
    const sectionElement = screen.getByTestId('section');
    // Check if section header is not rendered
    expect(
      sectionElement.querySelector('.section__header')
    ).not.toBeInTheDocument();
  });

  it('renders title and button correctly', () => {
    const ButtonComponent = <button>Click Me</button>;
    const props = {
      buttonComponent: ButtonComponent,
      title: 'Test Title',
    };
    setup(props);
    // Check if title is rendered
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    // Check if button is rendered
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    setup();
    // Check if children are rendered
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('applies correct CSS classes', () => {
    const ButtonComponent = <button>Click Me</button>;
    const props = {
      buttonComponent: ButtonComponent,
      title: 'Test Title',
    };
    setup(props);
    // Check if section has correct CSS classes
    const sectionElement = screen.getByTestId('section');
    expect(sectionElement).toHaveClass('section');
    expect(
      sectionElement.querySelector('.section__header')
    ).toBeInTheDocument();
    expect(
      sectionElement.querySelector('.title.section__title')
    ).toBeInTheDocument();
  });
});
