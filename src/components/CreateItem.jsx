import { useContext } from 'react';
import { CartContext } from '../routes/Router';
import PropTypes from 'prop-types';
import Icons from '../assets/icons';

export function CreateItem({ item, title, price, color }) {
  // Import context
  const { addToCart } = useContext(CartContext);

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
      <button
        className="flex items-center justify-center text-base bg-slate-400/20 rounded-xl mt-2 hover:bg-slate-300/40"
        onClick={() => addToCart(newItem)}
      >
        Add to Cart +
      </button>
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
    <div className="flex border p-3 my-3 rounded-xl bg-slate-400/20 justify-between">
      <div className='flex'>
        <div className="min-w-20 h-fit mr-3 self-center">{icon}</div>
        <div className="border-l p-2 pl-4">
          <p className="text-2xl mt-1 text-slate-300">{item.title}</p>
          <p className="text-xl">{item.price}</p>
        </div>
      </div>
      <div className='flex flex-col place-items-end'>
        <button aria-label='delete' onClick={() => removeFromCart(item)}>
          <svg className='w-8 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" fill="rgba(255, 255, 255, 0.87)"  /></svg>
        </button>
        <p className='text-2xl'>
          Quantity:  
          <input className='w-10 h-10 ml-4 mt-2' type="number" name="quantity" id="qua" min={1} value={currentQuantityValue} onChange={(event) => handleQuantityChange(item, event.target.value)}/>
        </p>
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
