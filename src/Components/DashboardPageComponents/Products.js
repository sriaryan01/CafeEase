import React, { useState, useEffect } from 'react';
import { productList } from '../../Services/product_service';
import MenuCard from './menuCard';
import styled from 'styled-components';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await productList();
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='Container'>
      {products.map(product => (
        <MenuCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
