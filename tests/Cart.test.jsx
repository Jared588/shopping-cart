import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { CartContext } from '../src/routes/Router';
import Cart from '../src/routes/Cart';
import { useState } from 'react';

describe('Cart Page', () => {
  it('renders empty cart page', () => {
    const cart = [];
    render(
      <BrowserRouter>
        <CartContext.Provider value={{ cart }}>
          <Cart cart={cart} />
        </CartContext.Provider>
      </BrowserRouter>,
    );
    expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();
  });

  it('renders cart page with items', () => {
    const cart = [
      {
        item: 'shirtC',
        title: 'T-shirt - white',
        price: 39.99,
        color: 'white',
        quantity: 1,
      },
      {
        item: 'shirtC',
        title: 'T-shirt - black',
        price: 39.99,
        color: 'black',
        quantity: 1,
      },
    ];
    render(
      <BrowserRouter>
        <CartContext.Provider value={{ cart }}>
          <Cart cart={cart} />
        </CartContext.Provider>
      </BrowserRouter>,
    );
    expect(screen.getByText(/T-shirt - white/i)).toBeInTheDocument();
    expect(screen.getByText(/T-shirt - black/i)).toBeInTheDocument();
  });

  it('removes item when deleted', async () => {
    const TestComponent = () => {
      const [cart, setCart] = useState([
        {
          item: 'shirtC',
          title: 'T-shirt - white',
          price: 39.99,
          color: 'white',
          quantity: 1,
        },
      ]);

      const removeFromCart = () => {
        setCart([]);
      };

      return (
        <BrowserRouter>
          <CartContext.Provider value={{ cart, removeFromCart }}>
            <Cart cart={cart} />
          </CartContext.Provider>
        </BrowserRouter>
      );
    };

    render(<TestComponent />); // Render the TestComponent

    let deleteBtn = screen.getByRole('button', { name: /delete/ });
    await userEvent.click(deleteBtn);
    expect(screen.queryByText(/T-shirt - white/i)).not.toBeInTheDocument();
  });
});
