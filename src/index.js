import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Shop from './Components/Shop.jsx';
import AboutUs from './Components/AboutUs.jsx';
import ContactUs from './Components/ContactUs.jsx';
import ProductDetail from './Components/ProductDetail.jsx';


import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/EShop",
      element: <App />,
    },
    {
        path:'/Shop',
        element: <Shop />
    },
    {
      path: "/product/:id",
      element: <ProductDetail />, 
    },
    {
      path:'/AboutUs',
      element: <AboutUs />
    },
    {
      path:'/ContactUs',
      element: <ContactUs />
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} basename='/EShop'/>
   
  
);

