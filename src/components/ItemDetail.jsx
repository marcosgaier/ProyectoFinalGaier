import React from 'react';
import { Box, Image, Text, Badge } from '@chakra-ui/react';

const ItemDetail = ({ item }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p="5">
      <Image src={item.imagePath} alt={`Imagen de ${item.title}`} boxSize="300px" objectFit="cover" />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            Nuevo
          </Badge>
          <Box
            ml="2"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {item.title}
          </Box>
        </Box>

        <Box>
          {item.description}
          <Box as="span" color="gray.600" fontSize="sm">
          </Box>
        </Box>

        <Box mt="1">
          <Text as="h2" lineHeight="tight" isTruncated>
            Precio: ${item.price}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ItemDetail;
