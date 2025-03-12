import React, { useEffect, useState } from 'react';
import './ProductDetail.css';
import Header from './Header';
import { useParams } from 'react-router-dom';
import { products } from './Shop';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import toast, { Toaster } from 'react-hot-toast';
function ProductDetail  (){

  const { addToCart } = useCart();

    const { id } = useParams();
    const notify = () => toast.success('Successfully Added!');
   
    const product = products.find((product) => product.id === parseInt(id));
  

    if (!product) {
      return <h2>Product not found</h2>;
    }

  return (
    <>
 
  
    
  <div id='ProductDetail' className='ProductDetail'>
    
    
    <div className='Product-Container'>
    <div className='btn-container'>
    <Link to="/shop"><button className='back-btn'>&lt; Back</button></Link>
    </div>
    <div className='product-container'>
      <div className='zoom-container'>
      <img src={product.image} alt={product.name} />
      </div>
      <div className='product-char'>
      <h1>{product.name}</h1>
      <div className='product-specs'>
      <b>specs: </b><br /> <p>{product.specs}</p><br/>
      </div>
      <b>Price: {product.price}</b> <br />
      <button className='Buy-btn' onClick={() => {
        addToCart(product);
        notify()
        }}>
        Add To Cart
     </button>
     <Toaster />
    </div>
    </div>
    </div>
    

    </div>
    </>
  );
};

export default ProductDetail;
