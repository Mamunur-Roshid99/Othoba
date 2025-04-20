import React from 'react'
import products from '../../data/products';
import ProductsCard from './ProductsCard';

const Products = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-9">
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default Products
