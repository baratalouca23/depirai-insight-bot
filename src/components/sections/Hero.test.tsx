import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { render } from '@/test/utils';
import { Hero } from './Hero';

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />);
    
    // Check for the main heading (H1)
    const heading = screen.getByRole('heading', { name: /experiências digitais|digital experiences/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders CTA buttons', () => {
    render(<Hero />);
    
    // Check for primary CTA - look for the link
    const links = screen.getAllByRole('link');
    const contactLink = links.find(link => link.getAttribute('href') === '#contact');
    expect(contactLink).toBeInTheDocument();
  });

  it('renders stats section', () => {
    render(<Hero />);
    
    // Check for stats list
    const statsList = screen.getByRole('list', { name: /estatísticas/i });
    expect(statsList).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<Hero />);
    
    const section = document.querySelector('[aria-labelledby="hero-title"]');
    expect(section).toBeInTheDocument();
  });
});
