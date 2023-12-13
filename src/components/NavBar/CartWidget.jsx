import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Badge, Icon, Box } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Box display="flex" alignItems="center" position="relative" cursor="pointer">
      <Icon as={FaShoppingCart} w={6} h={6} _hover={{ color: "blue.500" }} />
      {itemCount > 0 && (
        <Badge colorScheme="purple" position="absolute" top="-1" right="-1">
          {itemCount}
        </Badge>
      )}
    </Box>
  );
};

export default CartWidget;
