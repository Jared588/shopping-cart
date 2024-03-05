import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import App from '../App';
import ErrorPage from './ErrorPage';
import Store from './Store';
import Cart from './Cart';
import { useState, createContext } from 'react';

export const CartContext = createContext();

const Router = () => {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart((prevCart) => [...prevCart, item]);
  }

  function removeFromCart(itemToRemove) {
    setCart(prevCart => prevCart.filter(item => item !== itemToRemove));
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
      element: <Store />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/cart',
      element: <Cart cart={cart} setCart={setCart} />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <CartContext.Provider value={{ removeFromCart, addToCart }}>
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
};

export default Router;
