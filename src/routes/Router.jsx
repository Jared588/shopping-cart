import { createBrowserRouter, RouterProvider, Routes, Route, Navigate } from 'react-router-dom';
import App from '../App';
import ErrorPage from './ErrorPage';
import { Men, Women } from './Shop';

const Router = () => {
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
      path: '/shop/*',
      element: <Routes>
        <Route path="/" element={<Navigate to="/shop/men" />} />
        <Route path="men" element={<Men />} />
        <Route path="women" element={<Women />} />
      </Routes>,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
