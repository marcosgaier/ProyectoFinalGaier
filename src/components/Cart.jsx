import React, { useContext } from 'react';
import { CartContext } from './context/CartContext';
import { Link } from 'react-router-dom';
import { Box, Button, Text } from '@chakra-ui/react';

const Cart = () => {
  const { cart, removeItem, clear } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <Box p={5}>
        <Text>Tu carrito está vacío</Text>
        <Link to="/">Volver al catálogo</Link>
      </Box>
    );
  }

  return (
    <Box p={5}>
      {cart.map(item => (
        <Box key={item.id}>
          <Text>{item.title} - ${item.price} x {item.quantity}</Text>
          <Button onClick={() => removeItem(item.id)}>Eliminar</Button>
        </Box>
      ))}
      <Text>Precio total: ${totalPrice}</Text>
      <Button onClick={clear}>Vaciar Carrito</Button>
    </Box>
  );
};

export default Cart;
