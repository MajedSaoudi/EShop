import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Shop from './Components/Shop.jsx';
import AboutUs from './Components/AboutUs.jsx';
import ContactUs from './Components/ContactUs.jsx';
import ProductDetail from './Components/ProductDetail.jsx';
import { CartProvider } from './Components/CartContext.jsx';
import Layout from './Components/Layout.jsx';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/EShop",
      element: (
        <Layout>
          <App />
        </Layout>
      ),
    },
    {
      path: '/Shop',
      element: (
        <Layout>
          <Shop />
        </Layout>
      )
    },
    {
      path: "/product/:id",
      element: (
    
          <ProductDetail />
       
      )
    },
    {
      path: '/AboutUs',
      element: (
        <Layout>
          <AboutUs />
        </Layout>
      )
    },
    {
      path: '/ContactUs',
      element: (
        <Layout>
          <ContactUs />
        </Layout>
      )
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
  <RouterProvider router={router} basename='/EShop'/>
  </CartProvider> 
   
  
);

