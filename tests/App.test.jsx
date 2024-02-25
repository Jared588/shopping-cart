import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App.jsx';

describe('App component', () => {
  it('renders the home component', () => {
    render(<App />);
    expect(screen.getByText(/Cool Corner/i)).toBeInTheDocument();
  });
});
