import Header from '../components/Header';
import PropTypes from 'prop-types';
import { CreateWishlistItem } from '../components/CreateItem';

function Wishlist({ wishlist, showItemAddedMessage }) {
  return (
    <div className="flex flex-col min-h-svh justify-between bg-black bg-opacity-50">
      <Header />
      <div className="text-5xl bg-black bg-opacity-50 border-t flex flex-auto flex-col p-4 md:p-16 overflow-hidden">
        {wishlist.length === 0 && <p className='flex flex-auto justify-center place-items-center mb-40 slide-in'>
          Your wishlist is empty
          <svg className="w-10 ml-4 min-w-10 mt-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>heart-off-outline</title><path d="M2.39 1.73L1.11 3L3.19 5.08C2.45 6 2 7.19 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C14.32 19.24 15.14 18.5 15.9 17.79L20 22L21.27 20.73M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 7.74 4.22 7.06 4.61 6.5L14.5 16.37C13.74 17.06 12.95 17.78 12.1 18.55M8.3 5.1L6.33 3.13C6.7 3.05 7.1 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 10.84 20.69 12.92 18.47 15.27L17.06 13.86C18.91 11.88 20 10.2 20 8.5C20 6.5 18.5 5 16.5 5C15.1 5 13.74 5.83 13.11 7H10.89C10.38 6.06 9.39 5.34 8.3 5.1Z" fill="rgba(255, 255, 255, 0.87)" /></svg></p>}
        {wishlist.length > 0 && (
          <div className="flex flex-col slide-in">
            <h1 className='slide-in-2 text-5xl text-center mb-10'>Wishlist</h1>
            <div className="self-center flex flex-col w-full">
              {wishlist.map((item, index) => (
                <CreateWishlistItem key={index} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
      {showItemAddedMessage.toggle && (
        <div className="fixed px-8 py-4 mb-10 bg-green-400 text-black text-4xl pop-in" style={{ right: 0, bottom: 0 }}>
          Added to {showItemAddedMessage.type}!
        </div>
      )}
    </div>
  );
}

Wishlist.propTypes = {
  wishlist: PropTypes.array,
  showItemAddedMessage: PropTypes.object,
};

export default Wishlist;
