import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // agrego un producto al carrito. Si ya esta lo incremento su cantidad
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  // elimino producto del carrito segun su ID
  const removeItem = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  // Vacio todos los productos del carrito
  const clear = () => {
    setCart([]);
  };

  // Compruebo si un producto ya esta en el carrito
  const isInCart = (id) => {
    return cart.some(item => item.id === id);
  };

  // Actualiza la cantidad de un product en especial en el carrito.
  const updateItemQuantity = (productId, quantity) => {
    setCart(cart.map(item =>
      item.id === productId ? { ...item, quantity: parseInt(quantity, 10) } : item
    ));
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, updateItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
