import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Flex, Box, Text, Image, Link } from '@chakra-ui/react';

const Home = () => {
  const [categories, setCategories] = useState([]);


  const categoryImages = {
    Carteras: '/images/carteras.jpg',
    Ceramicas: '/images/ceramicas.jpg',
    Blanqueria: '/images/blanqueria.webp',

  };

   useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => {
        const uniqueCategories = [...new Set(data.map(item => item.category))];
        setCategories(uniqueCategories);
      })
      .catch(error => console.error('Error al cargar las categorías:', error));
  }, []);

  return (
    <Box p={5}>
      <Text fontSize="2xl" mb={4}>Categorías</Text>
      <Flex wrap="wrap" justify="center">
        {categories.map(category => (
          <Link as={RouterLink} to={`/categoria/${category}`} key={category} style={{ textDecoration: 'none' }}>
            <Box p={3} boxShadow="md" borderRadius="lg" m={2} _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}>
              <Image src={categoryImages[category]} alt={category} borderRadius="md" boxSize="200px" objectFit="cover" />
              <Text fontSize="xl" mt={2}>{category}</Text>
            </Box>
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export default Home;