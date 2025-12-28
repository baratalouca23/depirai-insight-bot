import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '@/test/utils';
import { Contact } from './Contact';

// Mock fetch for form submission
global.fetch = vi.fn();

describe('Contact Form', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: true,
      json: async () => ({}),
    });
  });

  it('renders the contact form', () => {
    render(<Contact />);
    
    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/empresa/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/objetivo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mensagem/i)).toBeInTheDocument();
  });

  it('shows validation errors for empty required fields', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    
    // Click submit without filling fields
    const submitButton = screen.getByRole('button', { name: /enviar|send/i });
    await user.click(submitButton);
    
    // Should show error messages
    await waitFor(() => {
      expect(screen.getByText(/pelo menos 2 caracteres|at least 2 characters/i)).toBeInTheDocument();
    });
  });

  it('validates email format', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    
    const emailInput = screen.getByLabelText(/email/i);
    await user.type(emailInput, 'invalid-email');
    await user.tab(); // Trigger blur
    
    await waitFor(() => {
      expect(screen.getByText(/email inválido|invalid email/i)).toBeInTheDocument();
    });
  });

  it('has accessible form fields', () => {
    render(<Contact />);
    
    // All inputs should have associated labels
    const nameInput = screen.getByLabelText(/nome/i);
    expect(nameInput).toHaveAttribute('aria-required', 'true');
    
    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(emailInput).toHaveAttribute('autocomplete', 'email');
  });

  it('honeypot field is hidden from users', () => {
    render(<Contact />);
    
    // Honeypot should be visually hidden
    const honeypot = document.getElementById('honeypot');
    expect(honeypot).toBeInTheDocument();
    expect(honeypot?.closest('div')).toHaveClass('-left-[9999px]');
  });
});
