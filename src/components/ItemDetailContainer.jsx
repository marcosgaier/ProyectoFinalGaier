import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { Spinner, Center } from '@chakra-ui/react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { productId } = useParams();
  const db = getFirestore();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const docRef = doc(db, 'products', productId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setItemDetail({ ...docSnap.data(), id: docSnap.id });
        } else {
          console.log('No se encontró el producto');
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error al cargar el producto:', error);
        setIsLoading(false);
      }
    };

    fetchProduct();
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
