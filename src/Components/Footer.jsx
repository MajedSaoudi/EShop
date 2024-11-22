import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {


  return (
    <div className='Footer'>
        <div className='Footer-Container'>
               <div className='Rights'>
                <h1>E-SHOP</h1>
                <p>© 2024 Appify, Inc.
                All rights reserved.</p>
               </div>
               <div className='footer-adds'>
                 <h2>Shop</h2>   
                 <Link to="/Shop?filter=iPhone">iPhone</Link>
                 <Link to="/Shop?filter=iPad"><p>iPad</p></Link>
                 <Link to="/Shop?filter=Macbook"><p>Mac</p></Link>
                 <Link to="/Shop?filter=Watch"><p>Watch</p></Link>
                 <Link to="/Shop?filter=Airpod"><p>AirPods</p></Link>
               </div>
               <div className='footer-adds'>
                <h2>About</h2>
                <Link to="/AboutUs">About Us</Link>
               </div>
               <div className='footer-adds'>
                <h2>Help</h2>
                <Link to="/ContactUs">Contact Us</Link>
               </div>
        </div>
    </div>
  )
}

export default Footer