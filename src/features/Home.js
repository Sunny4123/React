import React, { useState } from 'react';

import data from '../data';
import Product from './product';
import AddForm from './product/AddFrom';

let id = 9;

export default function Home() {
  const [products, setProducts] = useState([]);
 

  function addProduct(product) {
    const newProduct = { id: ++id, ...product };
    setProducts([...products, newProduct]);
  }

  return (
    <>
      <h1>New Products</h1>
      {
        products.length > 0 ? (
          <ul className="Home__products">
            {products.map((product) => (
              <Product key={product.id} item={product} />
            ))}
          </ul>
        ) : (
          <div>Loading products....</div>
        )
      }
      <AddForm addProduct={addProduct} />
    </>
  );
}