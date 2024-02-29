import { createBrowserRouter, RouterProvider, Routes, Route, Navigate } from 'react-router-dom';
import App from '../App';
import ErrorPage from './ErrorPage';
import Store from './Store';

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
      path: '/store/*',
      element: <Routes>
        <Route path="/" element={<Store />} />
        <Route path="shirts" element={<Store />} />
        <Route path="shoes" element={<Store />} />
        <Route path="shoes" element={<Store />} />
      </Routes>,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
