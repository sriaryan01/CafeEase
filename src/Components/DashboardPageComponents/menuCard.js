// MenuCard.js
import React from 'react';
import "../../CSS/DashboardPage.css";
import "./style.css";

const MenuCard = ({ product, onAddToCart  }) => {
  return (
    <div className='Card'>
      <h3 className='ProductName'>{product.name}</h3>
      <p className='ProductDescription'>{product.description}</p>
      <div className='ProductPrice'>INR {product.price}</div>
      <div className='CategoryName'>{product.categoryName}</div>
      <button className='card-tag subtle' onClick={() => onAddToCart(product.id)}>Add to Cart</button>
    </div>
  );
};

export default MenuCard;
