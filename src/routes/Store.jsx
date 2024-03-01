import { Link } from 'react-router-dom';
import { CreateItem } from '../components/Item';
import { useState } from 'react';
import CreateCategory from '../components/CreateCategory';

function Store() {
    const [filter, setFilter] = useState('shirts');

    return (
        <div className="flex flex-col min-h-svh justify-between bg-black bg-opacity-50">
        <header className="flex flex-col text-center justify-between sm:flex-col md:flex-row lg:flex-row bg-black bg-opacity-85">
            <div className="flex flex-wrap justify-center py-4 px-10">
            <Link to='/home'>
                <h1 aria-label='title' className="text-5xl cursor-pointer">S</h1>
            </Link>
            <nav className="flex items-center text-2xl px-10 space-x-10 *:cursor-pointer">
                <Link to='/store'>
                <p>Store</p>
                </Link>
                <p>Sale</p>
            </nav>
            </div>
            <nav className="flex items-center justify-center text-2xl px-10 space-x-10 *:cursor-pointer">
            <svg className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>account-outline</title><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z" fill="rgba(255, 255, 255, 0.87)" /></svg>
            <svg className="w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>heart-outline</title><path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" fill="rgba(255, 255, 255, 0.87)" /></svg>
            <svg className="w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cart-outline</title><path d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" fill="rgba(255, 255, 255, 0.87)" /></svg>
            </nav>
        </header>
        <div className='bg-neutral-300 text-black text-center font-semibold fade-in'>Dont Miss Our 50% Sale!</div>
            <div className="text-5xl bg-black bg-opacity-80 border-t grid grid-cols-6 flex-auto px-16 py-10 overflow-hidden">
                <div className='border-r col-span-1 flex flex-col'>
                    <h2 aria-label='filter-heading' className='text-4xl font-semibold slide-in text-slate-500'>Categories</h2>
                    <ul aria-label='categories' className='text-2xl px-2 py-6 space-y-4 *:cursor-pointer slide-in-2'>
                        <li onClick={() => setFilter('shirts')}>Shirts</li>
                        <li onClick={() => setFilter('shoes')}>Shoes</li>
                        <li onClick={() => setFilter('misc')}>Misc.</li>
                    </ul>
                </div>
                <div className='flex-auto col-span-5 p-10'>
                    {/* Shirts */}
                    {(filter === 'shirts') && <CreateCategory name='shirts' array={shirts} />}
                    {/* Shoes */}
                    {(filter === 'shoes') && <CreateCategory name='shoes' array={shoes} />}
                    {/* Misc. */}
                    {(filter === 'misc') && <CreateCategory name='misc' array={misc} />}           
                </div>
            </div>
        </div>
    )
}

const shirts = [
    // C-neck
    CreateItem('shirtC', 'T-shirt - white', '$39.99', 'white'),
    CreateItem('shirtC', 'T-shirt - grey', '$39.99', 'gray'),
    CreateItem('shirtC', 'T-shirt - black', '$39.99', 'black'),
    CreateItem('shirtC', 'T-shirt - silver', '$39.99', 'silver'),
    // V-neck
    CreateItem('shirtV', 'T-shirt - purple', '$39.99', 'purple'),
    CreateItem('shirtV', 'T-shirt - pink', '$39.99', 'pink'),
    CreateItem('shirtV', 'T-shirt - teal', '$39.99', 'teal'),
]

const shoes = [
    // Formal
    CreateItem('shoeFormal', 'Shoe - white', '$39.99', 'white'),
    CreateItem('shoeFormal', 'Shoe - black', '$39.99', 'black'),
    CreateItem('shoeFormal', 'Shoe - gray', '$39.99', 'gray'),
    // Heel
    CreateItem('shoeHeel', 'Heel - black', '$39.99', 'black'),
    CreateItem('shoeHeel', 'Heel - red', '$39.99', 'red'),
    CreateItem('shoeHeel', 'Heel - blue', '$39.99', 'blue'),
    // Sneaker
    CreateItem('shoeSneaker', 'Sneaker - white', '$39.99', 'white'),
    CreateItem('shoeSneaker', 'Sneaker - black', '$39.99', 'black'),
    CreateItem('shoeSneaker', 'Sneaker - gray', '$39.99', 'gray'),
]

const misc = [
    // Glasses
    CreateItem('sunglasses', 'Sunglasses - white', '$39.99', 'white'),
    CreateItem('sunglasses', 'Sunglasses - black', '$39.99', 'black'),
    // Tie
    CreateItem('tie', 'Tie - white', '$39.99', 'white'),
    CreateItem('tie', 'Tie - black', '$39.99', 'black'),
    // Bow-tie
    CreateItem('bow-tie', 'bow-tie - white', '$39.99', 'white'),
    CreateItem('bow-tie', 'bow-tie - black', '$39.99', 'black'),
    // Necklace
    CreateItem('necklace', 'Necklace', '$39.99', 'white'),
    // Hats
    CreateItem('wizard-hat', 'Wizard-Hat', '$39.99', 'purple'),
]
export default Store