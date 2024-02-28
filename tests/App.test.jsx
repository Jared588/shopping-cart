import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Router from '../src/routes/Router.jsx';

describe('App component', () => {
  it('renders the home component', () => {
    render(<Router />);
    expect(screen.getByText(/Style. Simplified/i)).toBeInTheDocument();
  });
});
