import React from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';

const ItemList = ({ products }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {products.map(product => (
        <Link to={`/producto/${product.id}`} key={product.id} style={{ textDecoration: 'none' }}>
          <Item {...product} />
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
