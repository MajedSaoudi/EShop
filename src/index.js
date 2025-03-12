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
import ScrollToTop from './Components/ScrollTotop.jsx';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/EShop",
      element: (
        <Layout>
          <ScrollToTop />
          <App />
        </Layout>
      ),
    },
    {
      path: '/Shop',
      element: (
        <Layout>
          <ScrollToTop />
          <Shop />
        </Layout>
      )
    },
    {
      path: "/product/:id",
      element: (
        <Layout>
          <ScrollToTop />
          <ProductDetail />
        </Layout>
      )
    },
    {
      path: '/AboutUs',
      element: (
        <Layout>
          <ScrollToTop />
          <AboutUs />
        </Layout>
      )
    },
    {
      path: '/ContactUs',
      element: (
        <Layout>
          <ScrollToTop />
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


