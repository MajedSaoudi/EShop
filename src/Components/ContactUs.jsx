import React from 'react';
import './ContactUs.css';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

function ContactUs() {
  useEffect(()=>{
    AOS.init({duration:1000})
},[]);
  return (
    <div className='AboutUs'>
   
           <div className='space'> </div>
          <div className='AboutUs-header' >
          <div data-aos="fade-right">
           <h1>Contact Us</h1>
           </div>
         </div>
         <div className='AboutUS-Container' >
         <div className='path'>
          <ul>
            <li>
              <Link to='/EShop'>Home </Link>
            </li>
            <li>
             / Contact Us
            </li>
          </ul>
        </div>
        <div className='Contact-content'>
        <h1>Contact Us</h1>
        <p>Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.</p>
        </div>
        <div className='Form-container'> 
        <form className='Contact-form' action="https://formspree.io/f/xwpelkdn" method="POST">
             <h1>Feel free to contact us</h1>
             <div className='name-field'>
             <div >
              <p>First name</p>
              <input type="text" placeholder='First name'/>
             </div>
             <div>
              <p>Last name</p>
              <input type="text" placeholder='Last name'/>
             </div>
             </div>
             <div>
              <p>Email</p>
              <input type="email" placeholder='Email'/>
             </div>
             <div>
              <p>Message</p>
              <textarea name="Message" id="" placeholder='Message' rows={6}></textarea>
             </div>
             <div className='submit-btn'>
             <button type='Submit'>Submit</button>
             </div>
        </form>
        </div>
        </div>
   
        </div>
  )
}

export default ContactUs