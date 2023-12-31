import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './component/Shop/Shop.jsx';
import Home from './component/Layout/Home.jsx';
import Orders from './component/Orders/Orders.jsx';
import Inventory from './component/Inventory/Inventory.jsx';
import Login from './component/Login/Login.jsx';
import CartProductsLoader from './Loaders/CartProductLoader.js';
import CheckOut from './component/CheckOut/CheckOut.jsx';
import SignUp from './component/SignUp/SignUp.jsx';
import AuthProvider from './component/providers/authProvider.jsx';
import PrivateRoutes from './routes/PrivateRoutes.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        loader: CartProductsLoader // এখানে Manually data fetch না করে আলাদা একটি function এর মধ্যে data load করে এখানে Define করে দেয়া হয়েছে।

      },
      {
        path: 'inventory',
        element: <PrivateRoutes><Inventory></Inventory></PrivateRoutes>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'checkout',
        element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
