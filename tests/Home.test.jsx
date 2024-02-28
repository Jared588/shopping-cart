import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../src/Home';

describe('Home component', () => {
  it('renders correct heading', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    expect(screen.getByRole('heading', { name: /title/ }).textContent).toMatch(
      /S/i,
    );
  });

  it('renders navbar', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    const navElement = screen.getByRole('navigation', { name: /primary-nav/ });
    expect(navElement).toBeInTheDocument();
    expect(navElement.children[0].textContent).toMatch(/Men/i);
    expect(navElement.children[1].textContent).toMatch(/Women/i);
    expect(navElement.children[2].textContent).toMatch(/Sale/i);
  });
});
