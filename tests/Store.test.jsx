import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Store from '../src/routes/Store';
import { BrowserRouter } from 'react-router-dom';
import { CartContext } from '../src/routes/Router';

describe('Store', () => {
    it('renders store page', () => {
        render(
            <BrowserRouter>
                <CartContext.Provider value={{ addToCart: () => {}}}>
                    <Store />
                </CartContext.Provider>
            </BrowserRouter>
        );
        expect(screen.getByRole('heading', {name: /filter-heading/}).textContent).toMatch(/categories/i);
    })

    it('renders categories', () => {
        render(
            <BrowserRouter>
                <CartContext.Provider value={{ addToCart: () => {}}}>
                    <Store />
                </CartContext.Provider>
            </BrowserRouter>
        );
        const categories = screen.getByRole('list', {name: /categories/}).children;
        expect(categories[0].textContent).toMatch(/Shirts/);
        expect(categories[1].textContent).toMatch(/Shoes/);
        expect(categories[2].textContent).toMatch(/Misc./);
    })

    it('renders items correctly', () => {
        render(
            <BrowserRouter>
                <CartContext.Provider value={{ addToCart: () => {}}}>
                    <Store />
                </CartContext.Provider>
            </BrowserRouter>
        );
        const shirtsContainer = screen.getByTestId('shirts-container')
        expect(shirtsContainer.children.length).toBeGreaterThan(0)
    })
})
