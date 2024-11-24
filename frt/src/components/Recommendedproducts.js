
import React from 'react';
import ProductCard from './ProductCard';

const RecommendedProducts = ({ recommendedProducts }) => {
  // Check if recommendedProducts is an array before calling .map()
  if (!Array.isArray(recommendedProducts)) {
    return <p>Loading recommended products...</p>; // Show a loading message if it's not an array
  }

  return (
    <div className="recommended-products">
      {recommendedProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default RecommendedProducts;
