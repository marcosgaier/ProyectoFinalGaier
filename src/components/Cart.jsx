import React, { useContext } from 'react';
import { CartContext } from './context/CartContext';
import { Link } from 'react-router-dom';
import { Box, Button, Text, Image, Input } from '@chakra-ui/react';
import SendOrder from './sendOrder';
const Cart = () => {
  const { cart, removeItem, clear, updateItemQuantity } = useContext(CartContext);

  const handleChangeQuantity = (item, quantity) => {
    updateItemQuantity(item.id, quantity);
  };

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
        <Box key={item.id} display="flex" alignItems="center" mb={4}>
          <Image src={item.imagePath} alt={item.title} boxSize="50px" mr={3} />
          <Text flex="1">{item.title} - ${item.price} x </Text>
          <Input 
            type="number" 
            value={item.quantity} 
            onChange={(e) => handleChangeQuantity(item, e.target.value)}
            size="sm"
            maxW="50px"
            mr={3}
          />
          <Button onClick={() => removeItem(item.id)}>Eliminar</Button>
        </Box>
      ))}
      <Text>Precio total: ${totalPrice}</Text>
      <Button onClick={clear} mb={4}>Vaciar Carrito</Button>
      <SendOrder />
    </Box>
  );
};

export default Cart;
