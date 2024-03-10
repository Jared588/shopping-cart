import CreateCategory from '../components/CreateCategory';
import { catalogue } from '../Catalogue';
import Header from '../components/Header';
import PropTypes from 'prop-types';

function Sale({ showItemAddedMessage }) {
    return (
        <div className="flex flex-col min-h-svh justify-between bg-black bg-opacity-50">
            <Header />
            <div className="text-5xl bg-black bg-opacity-80 border-t flex flex-col flex-auto md:px-16 lg:py-10 overflow-hidden">
                <h1 aria-label='sale-heading' className='slide-in-2 text-5xl text-center my-4'>Black and White Sale</h1>
                <div className='flex-auto sm:px-10 mt-8'>
                    {/* Sale */}
                    <CreateCategory name='sale' array={catalogue.sale} />          
                </div>
            </div>
            {showItemAddedMessage?.toggle && (
                <div className="fixed px-8 py-4 mb-10 bg-green-400 text-black text-4xl pop-in" style={{ right: 0, bottom: 0 }}>
                Added to {showItemAddedMessage.type}!
                </div>
            )}
        </div>
    )
}

Sale.propTypes = {
    showItemAddedMessage: PropTypes.object,
}

export default Sale;