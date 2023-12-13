import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();
  const db = getFirestore();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Obtener los documentos de la colección 'products'
        const querySnapshot = await getDocs(collection(db, 'products'));
        let items = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));

        // Filtrar por categoría si categoryName está definido
        if (categoryName) {
          items = items.filter(product => product.category === categoryName);
        }

        setProducts(items);
      } catch (error) {
        console.error('Error al cargar los productos:', error);
      }
    };

    fetchProducts();
  }, [categoryName]);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
