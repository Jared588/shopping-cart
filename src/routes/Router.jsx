import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import App from '../App';
import ErrorPage from './ErrorPage';
import Store from './Store';
import Sale from './Sale';
import Wishlist from './Wishlist';
import Cart from './Cart';
import Account from './Account';
import { useState, createContext } from 'react';

export const CartContext = createContext();

const Router = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [showItemAddedMessage, setShowItemAddedMessage] = useState({toggle:false, type:''});

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
    setShowItemAddedMessage({toggle:true, type:'Cart'});
    setTimeout(() => {
        setShowItemAddedMessage({toggle:false, type:''});
    }, 1900); // timer must be slightly less than animation timer (2s in this case)
  }

  function addToWishlist(item) {
    const itemIndex = wishlist.findIndex(wishlistItem => wishlistItem.title === item.title); // Get correct item index

    if(itemIndex >= 0) { // Check if the index is there
      const updatedWishlist = [...wishlist]; // Make copy
      updatedWishlist[itemIndex].quantity = parseInt(updatedWishlist[itemIndex].quantity) + 1;   // Update value
      setWishlist(updatedWishlist) ; // Update cart
    } else {
      setWishlist((prevWishlist) => [...prevWishlist, item]);
    }

    // Display added message
    setShowItemAddedMessage({toggle:true, type:'Wishlist'});
    setTimeout(() => {
        setShowItemAddedMessage({toggle:false, type:''});
    }, 1900); // timer must be slightly less than animation timer (2s in this case)
  }

  function removeFromCart(itemToRemove) {
    setCart(prevCart => prevCart.filter(item => item !== itemToRemove));
  }

  function removeFromWishlist(itemToRemove) {
    setWishlist(prevWishlist => prevWishlist.filter(item => item !== itemToRemove));
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
      path: '/wishlist',
      element: <Wishlist wishlist={wishlist} showItemAddedMessage={showItemAddedMessage}/>,
      errorElement: <ErrorPage />,
    },
    {
      path: '/account',
      element: <Account />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/cart',
      element: <Cart cart={cart} />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, wishlist, addToWishlist, removeFromWishlist, handleQuantityChange }}>
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
};

export default Router;
