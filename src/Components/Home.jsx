import React from 'react';
import iphone from '../Assets/Images/Iphone.png';
import iphone11promax from '../Assets/Images/iphone11 pro max.png';

import flame from '../Assets/Images/flame.png';
import m2macbook from '../Assets/Images/m2macbookair.png';
import ipad24 from '../Assets/Images/IpadPro2024.png';
import categorymac from '../Assets/Images/categorymac.png';

import categoryiphone from '../Assets/Images/category iphone.png';
import watch from '../Assets/Images/applewatch.png';

import iphone12pro from '../Assets/Images/iphone12pro.png';
import New from '../Assets/Images/New.png';
import m3macbook from '../Assets/Images/m3macbookair.png';
import m4macbook from '../Assets/Images/M4macbook.avif';
import ipad from '../Assets/Images/ipad.png';
import { products } from './Shop';
import iphone16pro from '../Assets/Images/iphone16pro.png';
import instagrampng from '../Assets/Images/instagram.png';
import whatsapppng from '../Assets/Images/WhatsApp_icon.png';
import Ipromax from '../Assets/Images/16promax.png';
import facebookpng from '../Assets/Images/facebook.png';
import { Link } from 'react-router-dom';
import {gsap} from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import { useEffect, useLayoutEffect, useRef } from 'react';
import './Home.css';
import Header from './Header';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


function Home(){

  useEffect(()=>{
    AOS.init({duration:1000})
},[]);


const comp = useRef(null);
const t1 = gsap.timeline();
useLayoutEffect(() => {

  const hasPlayedAnimation = sessionStorage.getItem("hasPlayedAnimation");
  if (!hasPlayedAnimation) {
  t1.from(["#title-1", "#title-2", "#title-3"], {
    opacity: 0,
    y: "+=30",
    stagger: 0.5,
  })  .to(["#title-1", "#title-2", "#title-3"], {
    opacity: 0,
    y: "-=30",
    delay: 0.3,
    stagger: 0.5,
    onStart: () => console.log("Title fade-out started"),
  }) .to("#intro-slider", {
    xPercent: -100,
    duration: 1,
    onStart: () => console.log("Intro slider exit animation started"),
  }) .from([".Header",".adds-container",".Home-Container"], {
    opacity: 0,
    duration: 0.5,
    ease: "back.out(1.7)",
    scale: 0.8,
    yPercent: 100,
  });
  sessionStorage.setItem("hasPlayedAnimation", "true");
}else {

  gsap.set("#intro-slider", { xPercent: -100 });
  gsap.set([".Header", ".adds-container", ".Home-Container"], {
    opacity: 1,
    scale: 1,
  });
}
},comp);

useEffect(() => {
  const panels = gsap.utils.toArray(".Home-section14, .Home-section12, .Home-section11");

  panels.forEach((panel) => {
    // Set up ScrollTrigger for each section
    ScrollTrigger.create({
      trigger: panel,
      start: "top top", // Trigger starts when the section reaches the top
      pin: true,        // Pin the section while scrolling
      pinSpacing: false // Remove spacing between sections
    });
  });
}, comp);

  return (
   
    
 <div className='intro'ref={comp}>
        <div
        id="intro-slider"
        className="h-screen p-10 bg-gray-50 absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight"
      >
        <div>
        <h1 className="text-9xl" id="title-1">
          Welcome
        </h1>
        <h1 className="text-9xl" id="title-2">
          To Our
        </h1>
        <h1 className="text-9xl" id="title-3">
          Store
        </h1>
        </div>
      </div>
    <div id='Home'>
    <header id="Header">
          <Header/>
      </header>
      <div className='adds-container'>
        <div className='adds' data-aos="fade-right">
          <a href="https://facebook.com/" target='_black'><img src={facebookpng} alt="" /></a>
          <a href="" target='_black'><img src={instagrampng} alt="" /></a>
          <a href="" target='_black'><img src={whatsapppng} alt="" /></a>
        </div>
      </div>
      <section className='Home-section'>
      <div className='Home-Container'>       
           <div className='Par-container' data-aos="zoom-out">
            <div className='Par'>
            <h1>Welcome to Apple's </h1>
            <div className='p-con'>
            <p>Discover the latest Apple products, from iPhones and MacBooks to iPads and Apple Watches and Airpods</p>
            </div>
            </div>
            <Link to="/Shop"><button className='Buy-btn'>Shop Now</button></Link>
            <Link to="/AboutUs"><button className='Learn-btn'>Learn More</button></Link>
           </div>
        </div>
        </section>

        </div>
        <section className='Home-section2'>
              <div className='Category-container' >
                <div className='Header-container'>
              <div className='Category-header'>
              <h2>Explore Our Products</h2>
              
              <h1>Experience the Best </h1>
              <div className='p-con'>
              <p>Immerse yourself in the world of Apple. Our cutting-edge devices are designed to seamlessly integrate with your lifestyle</p>
              </div>
              </div>
              </div>
           <div className='Category-card-container'>
                  <div className='Category-card' data-aos="zoom-out">
                    <div className='Category-card-image'>
                      <Link to='/Shop?filter=iPhone' >
                    <img src={categoryiphone} cm alt="" />
                    </Link>
                    </div>
                    <h1>iPhone</h1>
                  </div>
                  <div className='Category-card' data-aos="zoom-out">
                    <div className='Category-card-image'>
                      <Link to='/Shop?filter=Watch'>
                    <img src={watch} cm alt="" />
                    </Link>
                    </div>
                    <h1>Watch</h1>
                  </div>

                  <div className='Category-card' data-aos="zoom-out">
                    <div className='Category-card-image'>
                      <Link to='/Shop?filter=iPad'>
                    <img src={ipad} alt="" />
                    </Link>
                    </div>
                    <h1>iPad</h1>
                  </div>


                  <div className='Category-card' data-aos="zoom-out">
                    <div className='Category-card-image'>
                    <Link to='/Shop?filter=Macbook'>
                    <img src={categorymac} alt="" />
                    </Link>
                    </div>
                    <h1>Macbook</h1>
                  </div>
                  


           </div>
             
          

           </div>
        </section>
        
        <section className='Home-section3'>
          <div data-aos="fade-up">
           <h1>“Innovation distinguishes between a leader and a follower.”</h1>
           <h4>Steve Jobs</h4>
           </div>
        </section>
 
        <section className='Home-section4'>
        <div className='Header-container'>
                 <div className='Category-header'>
                  <h1>Best Selling Products</h1>
                  <div className='p-con'>
                  <p>Our most sold products</p>
                  </div>
                 </div>
                 </div>
                 <div>
                 <div className='Products-container'>
   
                <div  className={`Product`}>
                  <div className='product-image'>
                  <Link to={`/product/3`}>
                    <img src={iphone16pro}  />
                    </Link>
                  </div>
                  <div className='info-container'>
                    <h1>iPhone 16 Pro</h1>
                    <div className='product-price'>
                    <div>
                    <b>1099$</b> <br />
                    </div>
                    </div>
                    <Link to={`/product/3`}>
                    <button className='Buy-btn'>Buy Now</button>
                    </Link>
                  </div>
                </div>
                <div  className={`Product`}>
                  <div className='product-image'>
                  <Link to={`/product/5`}>
                    <img src={m2macbook}  />
                    </Link>
                  </div>
                  <div className='info-container'>
                    <h1>M2 Macbook Air</h1>
                    <div className='product-price'>
                    <div>
                    <b>1299$</b> <br />
                    </div>
                    </div>
                    <Link to={`/product/5`}>
                    <button className='Buy-btn'>Buy Now</button>
                    </Link>
                  </div>
                </div>
                <div  className={`Product`}>
                  <div className='product-image'>
                  <Link to={`/product/9`}>
                    <img src={iphone11promax}  />
                    </Link>
                  </div>
                  <div className='info-container'>
                    <h1>iPhone 11 ProMax</h1>
                    <div className='product-price'>
                    <div>
                    <b>374$</b> <br />
                    </div>
                    </div>
                    <Link to={`/product/9`}>
                    <button className='Buy-btn'>Buy Now</button>
                    </Link>
                  </div>
                </div>
                   
          
        </div>
                 </div>
        </section>
        <section className='introducing'>
          
          <div className='Header-container'>
              <div className='Category-header' data-aos="fade-right">
              <h2>Exclusive Tech Picks</h2>
              <h1>Your Gateway to Innovation</h1>
             <div className='imm-par'>
              <p>Explore the latest gadgets and accessories, carefully chosen to enhance your lifestyle and keep you ahead in tech.</p>
              </div>
              </div>
              </div>
        
        </section>   
        <section className='Home-section5'>
        <div className='Header-container'>
                 <div className='Category-header'>
                  <h1>Hot Deals <img src={flame} alt="" />
               
                   </h1>
                   </div>
                 </div>
                 <div>
                 <div className='Products-container'>
                <div  className='Product'>
                <div className='topright'> <img src={flame} alt="" /></div> 
                <div className='product-image'>
                  <Link to={`/product/7`}>
                    <img src={iphone12pro}  />
                    </Link>
                    </div>
                  <div className='info-container'>
                    <h1>iPhone 12 Pro</h1>
                    <div className='product-price'>
                    <div>
                    <b>200$</b> <br />
                    <p>361$</p>
                    </div>
                    </div>
                    <Link to={`/product/7`}>
                    <button className='Buy-btn'>Buy Now</button>
                    </Link>
                  </div>
                </div>
                <div  className={`Product`}>
                <div className='topright'> <img src={flame} alt="" /></div>
                  <div className='product-image'>
                  <Link to={`/product/5`}>
                    <img src={m3macbook}  />
                    </Link>
                  </div>
                  <div className='info-container'>
                    <h1>M3 Macbook Air</h1>
                    <b>1400$</b> <br />
                    <p>1599$</p>
                    <Link to={`/product/5`}>
                    <button className='Buy-btn'>Buy Now</button>
                    </Link>
                  </div>
                </div>
                <div  className={`Product`}>
                <div className='topright'> <img src={flame} alt="" /></div>
                  <div className='product-image'>
                  <Link to={`/product/6`}>
                    <img src={iphone}  />
                    </Link>
                  </div>
                  <div className='info-container'>
                    <h1>iPhone 15</h1>
                    <b>650$</b> <br />
                    <p>799$</p>
                    <Link to={`/product/6`}>
                    <button className='Buy-btn'>Buy Now</button>
                    </Link>
                  </div>
                </div>
 
          
        </div>
                 </div>
                 
        </section>
        <section className='introducing'>
          
          <div className='Header-container'>
              <div className='Category-header' data-aos="fade-right">
              <h2>Introducing the Latest Products</h2>
              <h1>Elevate Your Apple Experience</h1>
             <div className='imm-par'>
              <p>Explore our comprehensive collection of Apple products, including the latest iPhone, iPad, MacBook, and Apple Watch models</p>
              </div>
              </div>
              </div>
        
        </section>   

        <section className='Home-section6'>
        <div className='Header-container'>
                 <div className='Category-header'>
                  <h1>New Arrival</h1>
                 </div>
                 </div>
                 <div>
                 <div className='Products-container'>
   
                <div  className={`Product`}>
                <div className='topright'> <img src={New} alt="" /></div>
                  <div className='product-image'>
                  <Link to={`/product/3`}>
                    <img src={Ipromax}  />
                    </Link>
                  </div>
                  <div className='info-container'>
                    <h1>iPhone 16 Pro Max</h1>
                    <b>999$</b> <br />
                    <Link to={`/product/3`}>
                    <button className='Buy-btn'>Buy Now</button>
                    </Link>
                  </div>
                </div>
                <div  className={`Product`}>
                <div className='topright'> <img src={New} alt="" /></div>
                  <div className='product-image'>
                  <Link to={`/product/1`}>
                    <img src={m4macbook}  />
                    </Link>
                  </div>
                  <div className='info-container'>
                    <h1>M4 Macbook Pro</h1>
                    <b>1999$</b> <br />
                    <Link to={`/product/1`}>
                    <button className='Buy-btn'>Buy Now</button>
                    </Link>
                  </div>
                </div>
                <div  className={`Product`}>
                <div className='topright'> <img src={New} alt="" /></div>
                  <div className='product-image'>
                  <Link to={`/product/16`}>
                    <img src={ipad24}  />
                    </Link>
                  </div>
                  <div className='info-container'>
                    <h1>iPad Pro 2024</h1>
                    <b>999$</b> <br />
                    <Link to={`/product/16`}>
                    <button className='Buy-btn'>Buy Now</button>
                    </Link>
                  </div>
                </div>
          
        
            
          
        </div>
                 </div>
        </section>
        </div>
  )
}

export default Home