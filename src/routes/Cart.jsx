import Header from '../components/Header';
import PropTypes from 'prop-types';
import { CreateCartItem } from '../components/CreateItem';

function Cart({ cart }) {
  // Sum Total
  let total = 0
  for(let item of cart) {
    total += item.price;
  }
  
  return (
    <div className="flex flex-col min-h-svh justify-between bg-black bg-opacity-50">
      <Header />
      <div className="bg-neutral-300 text-black text-center font-semibold fade-in">
        Dont Miss Our 50% Sale!
      </div>
      <div className="text-5xl bg-black bg-opacity-50 border-t flex flex-auto flex-col p-16 overflow-hidden">
        <div className='flex slide-in'>
            <div className='self-center flex flex-col w-full'>
                {cart.map((item, index) => (
                  <CreateCartItem key={index} item={item} />
                ))}
            </div>
            <div className='pl-16 ml-10 border-l'>
                <p>Checkout</p>
                <p>Total: ${total}</p>
            </div>
        </div>
      </div>
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
};

export default Cart;
