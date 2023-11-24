import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { Spinner, Center } from '@chakra-ui/react';

const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetch('/products.json')
        .then(response => response.json())
        .then(data => {
          const product = data.find(p => p.id === parseInt(productId));
          setItemDetail(product);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error al cargar el producto:', error);
          setIsLoading(false);
        });
    }, 2000);
  }, [productId]);

  if (isLoading) {
    return (
      <Center h="100vh">
        <Spinner size="xl" color="teal.500" />
      </Center>
    );
  }

  if (!itemDetail) {
    return <div>Producto no encontrado</div>;
  }

  return <ItemDetail item={itemDetail} />;
};

export default ItemDetailContainer;
