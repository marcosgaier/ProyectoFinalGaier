import React, { useState } from 'react';
import { Button, Badge, useToast } from '@chakra-ui/react';

const ItemCount = ({ onAdd }) => {
  const [count, setCount] = useState(0);
  const toast = useToast();

  const incrementCount = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      toast({
        title: 'Error',
        description: 'No puedes agregar más de 10 unidades',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      toast({
        title: 'Error',
        description: 'No puedes tener menos de 0 unidades',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const addToCart = () => {
    onAdd(count);
    toast({
      title: 'Listo!',
      description: `Agregaste ${count} unidades`,
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <div>
      <Button colorScheme='teal' variant='outline' onClick={decrementCount}>-</Button>
      <Badge colorScheme='purple'>{count}</Badge>
      <Button colorScheme='teal' variant='outline' onClick={incrementCount}>+</Button>
      <Button colorScheme='linkedin' onClick={addToCart}>Agregar al Carrito</Button>
    </div>
  );
};

export default ItemCount;

