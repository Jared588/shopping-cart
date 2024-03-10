import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import App from '../App';
import ErrorPage from './ErrorPage';
import Store from './Store';
import Sale from './Sale';
import Cart from './Cart';
import { useState, createContext } from 'react';

export const CartContext = createContext();

const Router = () => {
  const [cart, setCart] = useState([]);
  const [showItemAddedMessage, setShowItemAddedMessage] = useState(false);

  function addToCart(item) {
    const itemIndex = cart.findIndex(cartItem => cartItem.title === item.title); // Get correct item index

    if(itemIndex >= 0) { // Check if the index is there
      const updatedCart = [...cart]; // Make copy
      updatedCart[itemIndex].quantity = parseInt(updatedCart[itemIndex].quantity) + 1;   // Update value
      setCart(updatedCart) ; // Update cart
    } else {
      setCart((prevCart) => [...prevCart, item]);
    }

    // Display added message
    setShowItemAddedMessage(true);
    setTimeout(() => {
        setShowItemAddedMessage(false);
    }, 1900); // timer must be slightly less than animation timer (2s in this case)
  }

  function removeFromCart(itemToRemove) {
    setCart(prevCart => prevCart.filter(item => item !== itemToRemove));
  }

  function handleQuantityChange(item, quantity) {
    if(quantity < 1) {
      quantity = 1;
    }
    const updatedCart = [...cart]; // Make copy
    const itemIndex = updatedCart.findIndex(cartItem => cartItem.title === item.title); // Get correct item index
    updatedCart[itemIndex].quantity = quantity;  // Update value
    setCart(updatedCart) ; // Update cart
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/home" />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/home',
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/store',
      element: <Store showItemAddedMessage={showItemAddedMessage}/>,
      errorElement: <ErrorPage />,
    },
    {
      path: '/sale',
      element: <Sale showItemAddedMessage={showItemAddedMessage}/>,
      errorElement: <ErrorPage />,
    },
    {
      path: '/cart',
      element: <Cart cart={cart} />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <CartContext.Provider value={{ cart, removeFromCart, addToCart, handleQuantityChange }}>
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
};

export default Router;
