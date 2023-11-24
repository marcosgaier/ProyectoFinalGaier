import React from 'react';
import { Box, Image, Text, Badge } from '@chakra-ui/react';

const Item = ({ title, price, imagePath, description }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p="5" m="5">
      <Image src={imagePath} alt={title} boxSize="300px" objectFit="cover" />
      <Box p="6">
        <Badge borderRadius="full" px="2" colorScheme="teal">
          Nuevo
        </Badge>
        <Text fontWeight="bold" fontSize="xl" mt="2">
          {title}
        </Text>
        <Text mt="2">${price}</Text>
        <Text fontSize="sm" mt="2">
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default Item;
