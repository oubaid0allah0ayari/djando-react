import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import RecommendedProducts from './Recommendedproducts'; // Ensure the correct import

const MainPage = () => {
  const [products, setProducts] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    // Mock data for products
    const mockProducts = [
      { id: 1, name: 'Laptop', category: 'Electronics', price: 999, image: 'https://picsum.photos/150/200?random=1', rating: 4 },
      { id: 2, name: 'Shirt', category: 'Clothing', price: 29, image: 'https://picsum.photos/150/200?random=2', rating: 4 },
      { id: 3, name: 'Book', category: 'Books', price: 19, image: 'https://picsum.photos/150/200?random=3', rating: 4 },
    ];

    const mockRecommendedProducts = [
      { id: 4, name: 'Smartphone', category: 'Electronics', price: 599, image: 'https://picsum.photos/150/200?random=4', rating: 4 },
      { id: 5, name: 'Jacket', category: 'Clothing', price: 49, image: 'https://picsum.photos/150/200?random=5', rating: 4 },
    ];

    // Simulate fetching data
    setProducts(mockProducts);
    setRecommendedProducts(mockRecommendedProducts);
  }, []);

  return (
    <div className="container mt-4">
      <h2>Our Products</h2>
      <ProductList products={products} />

      <h2 className="mt-5">Recommended for You</h2>
      <RecommendedProducts recommendedProducts={recommendedProducts} />
    </div>
  );
};

export default MainPage;
