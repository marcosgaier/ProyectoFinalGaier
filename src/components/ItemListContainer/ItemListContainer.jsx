




import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams(); 

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => {
        if (categoryName) {
          
          const filteredProducts = data.filter(product => product.category === categoryName);
          setProducts(filteredProducts);
        } else {
         
          setProducts(data);
        }
      })
      .catch(error => console.error('Error al cargar los productos:', error));
  }, [categoryName]); 

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
