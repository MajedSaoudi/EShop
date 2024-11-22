import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import burger from '../Assets/Images/Burger.png';
import close from '../Assets/Images/close.png';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
 
  const handleLinkClick = () => {
    setIsOpen(false);
  };


  return (
    <div className='Header'>
      <div className='Container'>
        <div>
          <a href='/EShop'>
            <h1>E-SHOP</h1>
          </a>
        </div>
        <div className='Categories'>
          {/* Hamburger icon and close icon */}
          <div className="checkbtn" onClick={() => setIsOpen(!isOpen)}>
            <img src={isOpen ? close : burger} alt="Menu" className='menu-icon' />
          </div>

          {/* Categories menu */}
          <div className={`menu ${isOpen ? 'show' : ''}`}>
            <Link to="/Shop?filter=iPhone" onClick={handleLinkClick}><p>iPhone</p></Link>
            <Link to="/Shop?filter=iPad" onClick={handleLinkClick}><p>iPad</p></Link>
            <Link to="/Shop?filter=Macbook" onClick={handleLinkClick}><p>Mac</p></Link>
            <Link to="/Shop?filter=Watch" onClick={handleLinkClick}><p>Watch</p></Link>
            <Link to="/Shop?filter=Airpod" onClick={handleLinkClick}><p>AirPods</p></Link>
            <Link to="/AboutUs"><p>About Us</p></Link>
            <Link to="/ContactUs"><p>Contact</p></Link>
            <button><Link to="/Shop">Shop</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;