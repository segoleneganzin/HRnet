import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import HomeCard from '../../components/HomeCard';
import { useNavigate } from 'react-router-dom';

const mockedUseNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockedUseNavigate,
  };
});

describe('<HomeCard>', () => {
  const defaultProps = {
    icon: 'icon-url.png',
    title: 'Sample Title',
    description: 'This is a sample description.',
    link: '/sample-path',
    linkText: 'Learn More',
  };

  const setup = (props = defaultProps) => {
    return render(
      <MemoryRouter>
        <HomeCard {...props} />
      </MemoryRouter>
    );
  };

  it('renders the icon correctly', () => {
    setup();
    const iconElement = screen.getByAltText('Sample Title icon');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute('src', 'icon-url.png');
  });

  it('renders the title correctly', () => {
    setup();
    const titleElement = screen.getByText('Sample Title');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.className).toBe('home-card__title title');
  });

  it('renders the description correctly', () => {
    setup();
    const descriptionElement = screen.getByText(
      'This is a sample description.'
    );
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement.className).toBe('home-card__description');
  });

  it('renders the link with correct text and onClick', () => {
    setup();
    const buttonElement = screen.getByRole('button', { name: 'Learn More' });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.className).toBe('btn home-card__btn bold');
  });
});
