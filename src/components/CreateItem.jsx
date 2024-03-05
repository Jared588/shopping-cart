import { useContext } from 'react';
import { CartContext } from '../routes/Router';
import PropTypes from 'prop-types';
import Icons from '../assets/icons';

export function CreateItem({ item, title, price, color }) {
  const { addToCart } = useContext(CartContext);

  // Make an object to hold the values
  let newItem = {
    item: item,
    title: title,
    price: price,
    color: color,
  };

  // Selected Item
  let selectedItem = Icons(color)[item] || null;

  return (
    <div className="w-48 h-fit flex flex-col border p-3 my-3 rounded-xl bg-slate-400/20">
      <div className="">{selectedItem}</div>
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
  // Selected Item
  let selectedItem = Icons(item.color)[item.item] || null;

  return (
    <div className="flex border p-3 my-3 rounded-xl bg-slate-400/20">
      <div className="min-w-20 h-fit mr-3 self-center">{selectedItem}</div>
      <div className="border-l p-2 pl-4">
        <p className="text-2xl mt-1 text-slate-300">{item.title}</p>
        <p className="text-xl">{item.price}</p>
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
