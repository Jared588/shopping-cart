import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CartContext } from '../src/routes/Router';
import Sale from '../src/routes/Sale';

describe('Sale component', () => {
  it('renders correct heading', () => {
    render(
      <BrowserRouter>
        <CartContext.Provider value={{ addToCart: () => {} }}>
          <Sale />
        </CartContext.Provider>
      </BrowserRouter>,
    );
    expect(
      screen.getByRole('heading', { name: /sale-heading/ }).textContent,
    ).toMatch(/Black and White Sale/i);
  });

  it('renders items correctly', () => {
    render(
      <BrowserRouter>
        <CartContext.Provider value={{ addToCart: () => {} }}>
          <Sale />
        </CartContext.Provider>
      </BrowserRouter>,
    );
    const saleContainer = screen.getByTestId('sale-container');
    expect(saleContainer.children.length).toBeGreaterThan(0);
  });
});
