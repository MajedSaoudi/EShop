import React from 'react'
import './AboutUs.css';
import Header from './Header';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { useEffect } from 'react';
import Footer from './Footer';
import 'aos/dist/aos.css';
function AboutUs() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[]);


  return (

       
    <div className='AboutUs'>
           <header id="Header">
            <Header />
           </header>
           <div className='space'> </div>
          <div className='AboutUs-header' >
          <div data-aos="fade-right">
           <h1>About Us</h1>
           </div>
         </div>
         <div className='AboutUS-Container' >
         <div className='path'>
          <ul>
            <li>
              <Link to='/EShop'>Home </Link>
            </li>
            <li>
             / About Us
            </li>
          </ul>
        </div>
        <div className='About-par'>
            <h1>About Us - E-Shop</h1>
            <p>Welcome to E-Shop, your one-stop destination for all things Apple! We are passionate about bringing you the latest and most innovative Apple products, from cutting-edge iPhones and sleek MacBooks to powerful iPads and essential accessories. At E-Shop, we believe in enhancing your lifestyle with technology that seamlessly integrates into your everyday life. <br />
            Our mission is to provide you with an unparalleled shopping experience by offering genuine Apple products at competitive prices, backed by exceptional customer service. Whether you're a tech enthusiast, a creative professional, or someone looking for the perfect gift, E-Shop is here to cater to your needs with a curated selection of premium devices.
             <br />
            We pride ourselves on our commitment to quality, reliability, and customer satisfaction. Explore our collection, enjoy fast and secure delivery, and experience why thousands of customers trust E-Shop as their preferred destination for Apple products.

Let us be a part of your journey into the world of innovation. Welcome to E-Shop, where Apple meets excellence!</p>
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default AboutUs