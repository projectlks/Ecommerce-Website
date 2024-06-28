


import React, { createContext, useState } from "react";

const CartContext = createContext();

export default function CartContextProvider ({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]); 
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart); 
  };
    const updateCart = (id, num) => {
        let updatedCart = cart.map((item) =>
          item.id === id ? { ...item, amount: item.amount + num } : item
        );
      setCart(updatedCart); 
    };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
