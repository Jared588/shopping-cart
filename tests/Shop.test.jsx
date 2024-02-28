import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Men } from '../src/routes/Shop';
import { BrowserRouter } from 'react-router-dom';

describe('Mens Section', () => {
    it('renders mens section', () => {
        render(
            <BrowserRouter>
                <Men />
            </BrowserRouter>
        );
        expect(screen.getByRole('heading', {name: /mens-heading/}).textContent).toMatch(/Mens Wear/i);
    })

    it('renders categories', () => {
        render(
            <BrowserRouter>
                <Men />
            </BrowserRouter>
        );
        const mensCategories = screen.getByRole('list', {name: /mens-categories/}).children;
        expect(mensCategories[0].textContent).toMatch(/Shirts/);
        expect(mensCategories[1].textContent).toMatch(/Shoes/);
        expect(mensCategories[2].textContent).toMatch(/Misc./);
    })
})