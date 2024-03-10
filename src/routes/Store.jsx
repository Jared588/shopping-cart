import { useState } from 'react';
import CreateCategory from '../components/CreateCategory';
import { catalogue } from '../Catalogue';
import Header from '../components/Header';
import PropTypes from 'prop-types';

function Store({ showItemAddedMessage }) {
    const [filter, setFilter] = useState('shirts');

    return (
        <div className="flex flex-col min-h-svh justify-between bg-black bg-opacity-50">
            <Header />
            <div className="text-5xl bg-black bg-opacity-80 border-t flex flex-col lg:flex-row flex-auto md:px-16 lg:py-10 overflow-hidden">
                <nav className='flex-col lg:pr-8 mb-10 border-b lg:border-r lg:border-b-0 lg:flex'>
                    <h2 aria-label='filter-heading' className='hidden lg:block pb-2 text-4xl font-semibold slide-in text-slate-500 text-center'>Categories</h2>
                    <ul aria-label='categories' className="flex justify-between py-5 lg:flex-col text-center lg:text-left text-2xl px-2 pb-4 lg:space-y-4 *:cursor-pointer slide-in-2">
                        <li onClick={() => setFilter('shirts')}>Shirts</li>
                        <li onClick={() => setFilter('shoes')}>Shoes</li>
                        <li onClick={() => setFilter('misc')}>Misc.</li>
                    </ul>
                </nav>
                <div className='flex-auto sm:px-10'>
                    {/* Shirts */}
                    {(filter === 'shirts') && <CreateCategory name='shirts' array={catalogue.shirts} />}
                    {/* Shoes */}
                    {(filter === 'shoes') && <CreateCategory name='shoes' array={catalogue.shoes} />}
                    {/* Misc. */}
                    {(filter === 'misc') && <CreateCategory name='misc' array={catalogue.misc} />}           
                </div>
            </div>
            {showItemAddedMessage.toggle && (
                <div className="fixed px-8 py-4 mb-10 bg-green-400 text-black text-4xl pop-in" style={{ right: 0, bottom: 0 }}>
                Added to {showItemAddedMessage.type}!
                </div>
            )}
        </div>
    )
}

Store.propTypes = {
    showItemAddedMessage: PropTypes.object,
}

export default Store