import Header from '../components/Header';
import PropTypes from 'prop-types';
import { CreateCartItem } from '../components/CreateItem';

function Cart({ cart }) {
  // Sum Total
  let total = 0;
  if (cart && cart.length > 0) {
    for (let item of cart) {
      total += (parseFloat(item.price) * item.quantity);
    }
  }

  return (
    <div className="flex flex-col min-h-svh justify-between bg-black bg-opacity-50">
      <Header />
      <div className="text-5xl bg-black bg-opacity-50 border-t flex flex-auto flex-col p-4 md:p-16 overflow-hidden">
        {cart.length === 0 && <p className='flex flex-auto justify-center place-items-center mb-40 slide-in'>
          Your cart is empty...
          <svg className="w-10 ml-4 min-w-10 mt-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cart-outline</title><path d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" fill="rgba(255, 255, 255, 0.87)" /></svg></p>}
        {cart.length > 0 && (
          <div className="flex flex-col slide-in lg:flex-row">
            <div className="self-center flex flex-col w-full">
              {cart.map((item, index) => (
                <CreateCartItem key={index} item={item} />
              ))}
            </div>
            <div className="flex flex-col mt-10 text-nowrap border-t lg:border-l lg:border-t-0 lg:pl-16 lg:ml-10 ">
              <p className='text-left text-4xl mt-4 lg:mt-0'>Cart Summary</p>
              <p className='text-3xl mt-4'>Total:</p>
              <p className='text-right text-3xl'>${total.toFixed(2)}</p>
              <button className='text-xl place-self-center bg-gray-600 rounded-lg px-4 py-1 mt-4 hover:bg-gray-500'>Proceed to Checkout</button>
              <p></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.array
};

export default Cart;
