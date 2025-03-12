import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import burger from '../Assets/Images/Burger.png';
import close from '../Assets/Images/close.png';
import cart from '../Assets/Images/Cart.svg';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [chartisOpen, setChartIsOpen] = useState(false);
  const { cartCount, cartItems, removeFromCart } = useCart();

  const handleLinkClick = () => {
    setIsOpen(false);
  };



  return (
    <>
      <div className='Header'>
        <div className='Container'>
          <div>
            <a href='/EShop'>
              <h1>E-SHOP</h1>
            </a>
          </div>
          <div className='Categories'>
            <div className="checkbtn" onClick={() => {setIsOpen(!isOpen);
              setChartIsOpen(false)
            }}>
              <img src={isOpen ? close : burger} alt="Menu" className='menu-icon' />
            </div>
            <div className={`menu ${isOpen ? 'show' : ''}`}>
              <Link to="/Shop?filter=iPhone" onClick={handleLinkClick}><p>iPhone</p></Link>
              <Link to="/Shop?filter=iPad" onClick={handleLinkClick}><p>iPad</p></Link>
              <Link to="/Shop?filter=Macbook" onClick={handleLinkClick}><p>Mac</p></Link>
              <Link to="/Shop?filter=Watch" onClick={handleLinkClick}><p>Watch</p></Link>
              <Link to="/Shop?filter=Airpod" onClick={handleLinkClick}><p>AirPods</p></Link>
              <Link to="/AboutUs"><p>About Us</p></Link>
              <Link to="/ContactUs"><p>Contact</p></Link>
              <button><Link to="/Shop">Shop</Link></button>
              <div className='cart-container' onClick={handleLinkClick}>
                <a className='cart' onClick={() => {setIsOpen(false);
              setChartIsOpen(!chartisOpen)
            }}>
                  <img src={cart} alt="Cart Icon" />
                  <p className='cart-num'>{cartCount}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`chart ${chartisOpen ? 'show' : ''}`}>
     
        <h2>Your Cart</h2> 
        <div className='chart-contain'>
          <div>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div key={index} className='cart-item'>
                <img src={item.image} alt={item.name} className='cart-item-image' />
                <div className='cart-item-details'>
                  <h3>{item.name}</h3>
                  <p>Price: {item.price}</p>
                  
                </div>
                <div className='remove-container'> 
                <button className='remove-btn' onClick={() => removeFromCart(item.id)}>X</button>
                </div>
                
              </div>
            ))
          ) : (
            <p>No items in the cart.</p>
          )}
          
        </div>
        </div>
        <button className='close-btn' onClick={() => setChartIsOpen(false)}>Close</button>
        <button className='Checkout-btn'><a href='https://buy.stripe.com/test_7sI9Ei2AZ7722oEaEG'>Checkout</a></button>
        </div>
      
    </>
  );
}

export default Header;
