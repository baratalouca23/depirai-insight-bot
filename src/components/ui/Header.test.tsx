import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { render } from '@/test/utils';
import { Header } from './Header';

describe('Header', () => {
  it('renders the logo', () => {
    render(<Header />);
    
    const logo = screen.getByAltText(/depirai/i);
    expect(logo).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header />);
    
    expect(screen.getByText(/serviços/i)).toBeInTheDocument();
    expect(screen.getByText(/portfólio/i)).toBeInTheDocument();
    expect(screen.getByText(/sobre/i)).toBeInTheDocument();
    expect(screen.getByText(/contato/i)).toBeInTheDocument();
  });

  it('renders language switcher', () => {
    render(<Header />);
    
    const langButton = screen.getByRole('button', { name: /select language/i });
    expect(langButton).toBeInTheDocument();
  });

  it('renders CTA button', () => {
    render(<Header />);
    
    // CTA is a link that includes "Agende" text
    const links = screen.getAllByRole('link');
    const ctaLink = links.find(link => link.textContent?.includes('Agende'));
    expect(ctaLink).toBeDefined();
  });

  it('renders mobile menu toggle', () => {
    render(<Header />);
    
    const menuToggle = screen.getByRole('button', { name: /toggle menu/i });
    expect(menuToggle).toBeInTheDocument();
  });
});
