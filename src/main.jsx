import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Cart from './components/Cart/Cart';
import '../index.css';
import {
  createBrowserRouter,
  Router,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Browse from './components/Browse/Browse';
import ShowProduct from './components/ShowProduct/ShowProduct';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/browse',
    element: <Browse />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/product/:productId',
    element:<ShowProduct/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Router />
    </RouterProvider>
  </React.StrictMode>,
);
