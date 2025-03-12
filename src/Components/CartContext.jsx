import { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);


  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCart);
    setCartCount(storedCart.length);
  }, []);

 
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    setCartCount(cartItems.length);
  }, [cartItems]);

 function addToCart(Product, amount) {
   
    setCartItems((prev) => {
      const existingProductIndex = prev.findIndex((item) => item.id === Product.id);

      if (existingProductIndex !== -1) {
        const updatedCart = [...prev];
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          amount: updatedCart[existingProductIndex].amount + amount,
          
        };
        return updatedCart;
        
      } else {
        return [...prev, { ...Product, amount }];
   
      }
    });
  }

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    setCartCount(updatedCart.length);
  };

  return (
    <CartContext.Provider value={{ cartCount, cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
