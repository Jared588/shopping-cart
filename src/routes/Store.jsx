import { useState } from 'react';
import CreateCategory from '../components/CreateCategory';
import { catalogue } from '../Catalogue';
import Header from '../components/Header';

function Store() {
    const [filter, setFilter] = useState('shirts');
    return (
        <div className="flex flex-col min-h-svh justify-between bg-black bg-opacity-50">
        <Header />
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
                    {(filter === 'shirts') && <CreateCategory name='shirts' array={catalogue.shirts} />}
                    {/* Shoes */}
                    {(filter === 'shoes') && <CreateCategory name='shoes' array={catalogue.shoes} />}
                    {/* Misc. */}
                    {(filter === 'misc') && <CreateCategory name='misc' array={catalogue.misc} />}           
                </div>
            </div>
        </div>
    )
}
export default Store