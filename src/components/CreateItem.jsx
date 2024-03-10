import { useContext } from 'react';
import { CartContext } from '../routes/Router';
import PropTypes from 'prop-types';
import Icons from '../assets/icons';

export function CreateItem({ item, title, price, color }) {
  // Import context
  const { addToCart, addToWishlist } = useContext(CartContext);

  // Make an object to hold the values
  let newItem = {
    item: item,
    title: title,
    price: price,
    color: color,
    quantity: 1,
  };

  // Get Icon
  let icon = Icons(color)[item] || null;

  return (
    <div className="w-48 h-fit flex flex-col border p-3 my-3 rounded-xl bg-slate-400/20">
      <div className="">{icon}</div>
      <div className="border-t">
        <p className="text-2xl mt-1 text-slate-300">{title}</p>
        <p className="w-fit text-xl">${price}</p>
      </div>
      <div className='flex'>
        <button
          className="flex flex-1 items-center justify-center text-base bg-slate-400/20 rounded-xl mt-2 hover:bg-slate-300/40"
          onClick={() => addToCart(newItem)}
        >
          Add to Cart +
        </button>
        <button
          className="flex items-center justify-center text-base mt-2"
          onClick={() => addToWishlist(newItem)}
        >
          <svg className='w-6 h-6 m-1 fill-gray-400 hover:fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Add to Wishlist</title><path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"/></svg>
        </button>
      </div>
    </div>
  );
}

export function CreateCartItem({ item }) {
  // Import context
  const { cart, removeFromCart, handleQuantityChange } = useContext(CartContext);

  // Get quantity value from state
  const itemIndex = cart.findIndex(cartItem => cartItem.title === item.title); // Get index
  const currentQuantityValue = cart[itemIndex].quantity; // Get quantity

  // Get Icon
  let icon = Icons(item.color)[item.item] || null;

  return (
    <div className="flex flex-col border p-3 my-3 rounded-xl bg-slate-400/20 justify-between md:flex-row">
      <div className='flex'>
        <div className="min-w-20 h-fit mr-3 self-center">{icon}</div>
        <div className="border-l p-2 pl-4">
          <p className="text-2xl mt-1 text-slate-300">{item.title}</p>
          <p className="text-xl">${(item.price * item.quantity).toFixed(2)}</p>
        </div>
      </div>
      <div className='flex flex-col place-items-end'>
        <button aria-label='delete' onClick={() => removeFromCart(item)}>
          <svg className='w-8 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Remove</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" fill="rgba(255, 255, 255, 0.87)"  /></svg>
        </button>
        <p className='text-2xl'>
          Quantity:  
          <input className='w-10 h-10 ml-4 mt-2' type="number" name="quantity" id="qua" min={1} value={currentQuantityValue} onChange={(event) => handleQuantityChange(item, event.target.value)}/>
        </p>
      </div>
    </div>
  );
}

export function CreateWishlistItem({ item }) {
  // Import context
  const { addToCart, removeFromWishlist } = useContext(CartContext);

  // Get Icon
  let icon = Icons(item.color)[item.item] || null;

  return (
    <div className="flex flex-col border p-3 my-3 rounded-xl bg-slate-400/20 justify-between md:flex-row">
      <div className='flex'>
        <div className="min-w-20 h-fit mr-3 self-center">{icon}</div>
        <div className="border-l p-2 pl-4">
          <p className="text-2xl mt-1 text-slate-300">{item.title}</p>
          <p className="text-xl">${item.price}</p>
        </div>
      </div>
      <div className='flex flex-col place-items-end'>
        <button aria-label='delete' onClick={() => removeFromWishlist(item)}>
        <svg className='w-8 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Remove</title><path d="M2.39 1.73L1.11 3L3.19 5.08C2.45 6 2 7.19 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C14.32 19.24 15.14 18.5 15.9 17.79L20 22L21.27 20.73M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 7.74 4.22 7.06 4.61 6.5L14.5 16.37C13.74 17.06 12.95 17.78 12.1 18.55M8.3 5.1L6.33 3.13C6.7 3.05 7.1 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 10.84 20.69 12.92 18.47 15.27L17.06 13.86C18.91 11.88 20 10.2 20 8.5C20 6.5 18.5 5 16.5 5C15.1 5 13.74 5.83 13.11 7H10.89C10.38 6.06 9.39 5.34 8.3 5.1Z" fill="rgba(255, 255, 255, 0.87)" /></svg>
        </button>
        <button
          className="flex flex-1 px-4 items-center justify-center text-base bg-slate-400/20 rounded-xl mt-2 hover:bg-slate-300/40"
          onClick={() => addToCart(item)}
        >
          Add to Cart +
        </button>
      </div>
    </div>
  );
}

CreateItem.propTypes = {
  item: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  color: PropTypes.string,
};

CreateCartItem.propTypes = {
  item: PropTypes.object,
};

CreateWishlistItem.propTypes = {
  item: PropTypes.object,
};
