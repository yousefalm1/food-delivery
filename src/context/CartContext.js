import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity = 1, totalPrice) => {
    setCart((prevCart) => [
      ...prevCart,
      {
        ...item,
        quantity: quantity || 1,
        totalPrice: totalPrice || item.price,
      },
    ]);
  };

  const updateQuantity = (index, action) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      if (action === 'plus') {
        newCart[index].quantity += 1;
      } else if (action === 'minus') {
        if (newCart[index].quantity > 1) {
          newCart[index].quantity -= 1;
        } else {
          newCart.splice(index, 1);
        }
      }
      return newCart;
    });
  };

  const removeItem = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
