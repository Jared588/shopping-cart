import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../src/Home';

describe('Home component', () => {
    it('renders correct heading', () => {
        render(<Home />);
        expect(screen.getByRole('heading').textContent).toMatch(/Cool Corner/i);
    })

    it('renders navbar', () => {
        render(<Home />);
        const navElement = screen.getByRole('navigation');
        expect(navElement).toBeInTheDocument(); 
        expect(navElement.children[0].textContent).toMatch(/Home/i);
        expect(navElement.children[1].textContent).toMatch(/Store/i);
        expect(navElement.children[2].textContent).toMatch(/Contact Us/i);
    })
})