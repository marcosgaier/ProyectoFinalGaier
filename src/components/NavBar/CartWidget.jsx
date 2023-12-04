import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Badge, Icon } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  if (itemCount === 0) return null; // No muestra el widget si el carrito está vacío

  return (
    <div>
      <Icon as={FaShoppingCart} />
      <Badge colorScheme="purple">{itemCount}</Badge>
    </div>
  );
};

export default CartWidget;

