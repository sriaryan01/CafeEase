// App.js
import React from 'react';
import axios from 'axios';
import MenuCard from '../Components/DashboardPageComponents/menuCard';

const App = () => {
  
  const handleAddToCart = (productId) => {
    axios.post('https://api.example.com/add-to-cart', { productId })
      .then(response => {
        console.log('Product added to cart:', response.data);
        // Handle successful response (e.g., show a message, update cart state)
      })
      .catch(error => {
        console.error('Error adding product to cart:', error);
        // Handle error (e.g., show an error message)
      });
  };
};

export default App;
