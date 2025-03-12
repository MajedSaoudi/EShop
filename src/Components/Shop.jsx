import React from 'react';
import { useState, useEffect } from 'react';
import './Shop.css';
import Header from './Header';
import New from '../Assets/Images/New.png';
import airpod3 from '../Assets/Images/airpods3.png';
import watchs2 from '../Assets/Images/WatchSeries2.png';
import macbookair from '../Assets/Images/macbookair.png';
import flame from '../Assets/Images/flame.png';
import Ipromax from '../Assets/Images/16promax.png';
import Search from '../Assets/Images/Search.png';
import iphone from '../Assets/Images/Iphone.png';
import iphone11 from '../Assets/Images/iphone11 pro max.png';
import ipad24 from '../Assets/Images/IpadPro2024.png';
import ipad22 from '../Assets/Images/ipad2022.png';
import iphone12 from '../Assets/Images/iphone12.png';
import iphone12pro from '../Assets/Images/iphone12pro.png';
import iphone13 from '../Assets/Images/iphone13.png';
import iphone13promax from '../Assets/Images/13promax.png';
import iphone16 from '../Assets/Images/iphone16.png';
import iphone16pro from '../Assets/Images/iphone16pro.png';
import secondiphone from '../Assets/Images/iphone11.png';
import m4macbook from '../Assets/Images/M4macbook.avif';
import m2macbook from '../Assets/Images/m2macbookair.png';
import m3macbook from '../Assets/Images/m3macbookair.png';
import { Link, useSearchParams } from 'react-router-dom';

export const products = [{ id: 0, name: 'iPhone 16 Pro Max', category: 'iPhone', price: '999$',iconimg:New,  image:Ipromax, specs: `• Display: LTPO Super Retina XDR OLED, 120Hz.
  • Processor: Apple A18 Pro (3 nm).
  • RAM: 8GB.
  • Storage: 256GB.`, checkout:'https://buy.stripe.com/test_7sI9Ei2AZ7722oEaEG', checkout:'https://buy.stripe.com/test_7sI9Ei2AZ7722oEaEG' },
{ id: 1, name: 'M4 Macbook Pro', category: 'Macbook', price: '1999$',iconimg:New,  image:m4macbook, specs: `• Display: 14.2-inch (3024 x 1964) 120Hz.
    • Processor: Apple M4.
    • RAM: 16GB LPDDR5
    • Storage: 1TB SSD` },
{ id: 2, name: 'iPhone 12', category: 'iPhone', price: '180$',oldprice:'265$' , image: iphone12, specs: `• Display: Super Retina XDR OLED.
      • Processor: Apple A14 Bionic 
      • RAM: 4GB 
      • Storage: 64GB
      • Camera: 12 MP`, checkout:'https://buy.stripe.com/test_7sI9Ei2AZ7722oEaEG' },
{ id: 3, name: 'iPhone 16 Pro', category: 'iPhone', price: '900$',oldprice:'1099$' ,image: iphone16pro, specs: `• Display: 6.1-inch (2532 x 1170) Super Retina XDR OLED.
        • Processor: Apple A16 Bionic 
        • RAM: 6GB
        • Storage: 1TB
        • Camera: 48MP` },
{ id: 4, name: 'iPhone 16', category: 'iPhone',price: '700$',oldprice:'900$' , image: iphone16, specs: `• Display: 6.1-inch (2532 x 1170) Super Retina XDR OLED.
          • Processor: Apple A16 Bionic 
          • RAM: 6GB
          • Storage: 512GB
          • Camera: 48MP` },  
{ id: 5, name: 'M3 Macbook Air', category: 'Macbook', price: '1400$',oldprice:'1599$',iconimg:flame , image: m3macbook, specs: `• Display: 14.2-inch (3024 x 1964) 120Hz .
            • Processor: Apple M3 .
            • RAM: 16GB LPDDR5
            • Storage: 1TB SSD` },
{ id: 15, name: 'Apple Watch 2', category: 'Watch', price: '799$', image: watchs2, specs: `• Display:Second-generation OLED Retina
              • Aluminum case - 38mm
              • Weight: 28.2g
              • Height: 38.6mm
              • Width: 33.3mm` },
{ id: 16, name: 'iPad Pro 2024', category: 'iPad', price: '999$',iconimg:New,  image: ipad24, specs: `• Display:11-inch Tandem OLED (2420 x 1668 pixels)
                • Processor: 9-core 4.4 GHz 
                • RAM: 8GB
                • Storage: 256GB
                • Camera: 12MP` },   
 { id: 18, name: 'iPad Pro 2022', category: 'iPad', price: '349$', image: ipad22, specs: `• Display:10.9 inches, 359.2 cm2 .
                  • Processor: Apple A14 Bionic
                  • RAM: 4GB
                  • Storage: 64GB
                  • Camera: 12MP` },                
{ id: 17, name: 'Airpods 3', category: 'Airpod', price: '172$', image: airpod3, specs: `• Chip: H1 headphone 
                  • Weight: 4.28 grams
                  • Depth: 19.21 mm
                  • Height: 30.79 mm
                  • Width: 18.26 mm` },              
  { id: 6, name: 'iPhone 15', category: 'iPhone', price: '650$',oldprice:'799$',iconimg:flame , image: iphone, specs: `• Display: 14.2-inch (3024 x 1964) 120Hz Mini-LED.
    • Processor: Apple A13 Bionic 
    • RAM: 6GB
    • Storage: 256GB
    • Camera: 48MP` },
      
{ id: 7, name: 'iPhone 12 Pro', category: 'iPhone', price: '$200',oldprice:'361$',image: iphone12pro,iconimg:flame ,specs: `• Display: 6.1-inch (2532 x 1170) Super Retina XDR OLED.
    • Processor: Apple A14 Bionic 
    • RAM: 6GB
    • Storage: 512GB
    • Camera: 12 MP` },
{ id: 8, name: 'iPhone 13 Pro Max', category: 'iPhone', price: '573$', image: iphone13promax, specs: `• Display: 6.7-inch (2778 x 1284) Super Retina XDR OLED.
      • Processor: Apple A15 Bionic 
      • RAM: 6GB
      • Storage: 128GB
      • Camera: 12 MP` },
{ id: 9, name: 'iPhone 11 Pro Max', category: 'iPhone', price: '374$', image: iphone11, specs: `• Display: Super Retina XDR OLED.
    • Processor: Apple A13 Bionic 
    • RAM: 4GB 
    • Storage: 256GB
    • Camera: 12 MP` },

  { id: 10, name: 'M1 Mac (2020)', category: 'Macbook', price: '600$',oldprice: '750$',iconimg:flame , image: macbookair, specs: `• Display: 13.3-inch (diagonal) LED-backlit display with IPS technology.
    • Processor: Apple M1 chip
    • RAM: 8GB LPDDR5
    • Storage: 256GB SSD` },
  
  { id: 11, name: 'iPhone 13', category: 'iPhone', price: '370$', image: iphone13, specs: `• Display: Super Retina XDR OLED.
    • Processor: Apple A15 Bionic 
    • RAM: 4GB 
    • Storage: 128GB
    • Camera: 12 MP` },
  
  
{ id: 12, name: 'M2 Macbook Air', category: 'Macbook', price: '1299$', image: m2macbook, specs: `• Display: 13.6-inch (2560 x 1600) 60Hz Retina.
    • Processor: Apple M2 (8 CPU cores, 8 GPU cores)
    • RAM: 8GB LPDDR5
    • Storage: 512GB SSD` },
  
{ id: 13, name: 'iPhone 11', category: 'iPhone', price: '399$', image: secondiphone, specs: `• Display: Liquid Retina IPS LCD, 625 nits (typ).
      • Color: Yellow
      • Processor: Apple A13 Bionic 
      • RAM: 4GB 
      • Storage: 128GB
      • Camera: 12 MP` },

];


function Shop() {


  const [filter, setFilter] = useState('ALL');
  const [search, setSearch] = useState('');

  const [searchParams] = useSearchParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  
    const category = searchParams.get("filter");
    if (category) {
      setFilter(category);
    }
  }, [searchParams]);


 
  const filteredAndSearchedProducts = products
  .filter(product => filter === 'ALL' || product.category === filter) 
  .filter(product => search === '' || product.name.trim().toLowerCase().replace(/\s+/g, '').includes(search.trim().toLowerCase().replace(/\s+/g, ''))); 
    
  return (
    <div className='Shop' id='Shop'>

      <div className='Shop-Container'>
        <div className='text-header'>
          <h1>Our Products</h1>
          <hr />
          <p>Here you can check out our new products with fair price on EShop.</p>
        </div>
        <div className='path'>
          <ul>
            <li>
              <Link to='/EShop'>Home </Link>
            </li>
            <li>
             / Shop
            </li>
          </ul>
        </div>
        <div className='Search-tab'>
          <div className='Search-box'>
          <img src={Search} alt='Search-icon'/>
          <input onChange={(e)=> setSearch(e.target.value)} value={search}/>
          </div>
        </div>
        <div className='filter'>
          <button onClick={() => setFilter('ALL')} style={filter === 'ALL' ? { opacity: 0.7, backgroundColor: 'black', color: 'white' } : {}}>ALL</button>
          <button onClick={() => setFilter('iPhone')}  style={filter === 'iPhone' ? { opacity: 0.7, backgroundColor: 'black', color: 'white' } : {}}>Iphone</button>
          <button onClick={() => setFilter('Macbook')} style={filter === 'Macbook' ? { opacity: 0.7, backgroundColor: 'black', color: 'white' } : {}}>Macbook</button>
          <button onClick={() => setFilter('Watch')} style={filter === 'Watch' ? { opacity: 0.7, backgroundColor: 'black', color: 'white' } : {}}>Watch</button>
          <button onClick={() => setFilter('iPad')} style={filter === 'iPad' ? { opacity: 0.7, backgroundColor: 'black', color: 'white' } : {}}>iPad</button>
          <button onClick={() => setFilter('Airpod')} style={filter === 'Airpod' ? { opacity: 0.7, backgroundColor: 'black', color: 'white' } : {}}>Airpod</button>
        </div>
        <div className='Products-container'>
          {filteredAndSearchedProducts.length > 0  ? (
            <>
              {filteredAndSearchedProducts.map(product => (
                <div key={product.id} className={`Product ${product.category}`} >
                  {product.iconimg && (
                  <div className='topright' > <img src={product.iconimg} alt="" /></div> 
                )}
                  <div className='product-image'>
                  <Link to={`/product/${product.id}`} >
                    <img src={product.image} alt={product.name} />
                    </Link>
                  </div>
                  <div className='info-container'>
                    <h1>{product.name}</h1>
                    <div className='product-price'>
                      <div>
                    <b>{product.price}</b> <br />
                    <p>{product.oldprice}</p>
                      </div>
                    </div>
                    <Link to={`/product/${product.id}`}>
                    <button className='Buy-btn'>Buy Now</button>
                    </Link>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <p>No products found.</p>
          )}
        </div>


      </div>
    </div>
  );
}

export default Shop;
