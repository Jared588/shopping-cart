import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Router from '../src/routes/Router';

describe('Home component', () => {
    it('renders correct heading', () => {
        render(<Router />);
        expect(screen.getByRole('heading').textContent).toMatch(/S/i);
    })

    it('renders navbar', () => {
        render(<Router />);
        const navElement = screen.getByRole('navigation', {name: /primary-nav/});
        expect(navElement).toBeInTheDocument(); 
        expect(navElement.children[0].textContent).toMatch(/Men/i);
        expect(navElement.children[1].textContent).toMatch(/Women/i);
        expect(navElement.children[2].textContent).toMatch(/Sale/i);
    })
})