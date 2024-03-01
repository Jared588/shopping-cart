import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Store from '../src/routes/Store';
import { BrowserRouter } from 'react-router-dom';

describe('Store', () => {
    it('renders store page', () => {
        render(
            <BrowserRouter>
                <Store />
            </BrowserRouter>
        );
        expect(screen.getByRole('heading', {name: /filter-heading/}).textContent).toMatch(/categories/i);
    })

    it('renders categories', () => {
        render(
            <BrowserRouter>
                <Store />
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
                <Store />
            </BrowserRouter>
        );
        const shirtsContainer = screen.getByTestId('shirts-container')
        const shoesContainer = screen.getByTestId('shoes-container')
        const miscContainer = screen.getByTestId('misc-container')
        expect(shirtsContainer.children.length).toBeGreaterThan(0)
        expect(shoesContainer.children.length).toBeGreaterThan(0)
        expect(miscContainer.children.length).toBeGreaterThan(0)
    })
})