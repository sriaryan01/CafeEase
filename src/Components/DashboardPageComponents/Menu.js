
import React, { useState, useEffect } from 'react';
import "../../CSS/DashboardPage.css";
import { handleAddToCart } from "../../Services/cart_service"
import { toast ,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Menu = ({ product, cartItemsIdToQuantityMap }) => {
  const [quantity, setQuantity] = useState(1);

  const addToast = () => {
    toast.success("Item added to cart.....", {
      position: "bottom-left",
      autoClose: 800,
      closeOnClick: true,
      theme: "dark",
    });
  };

  useEffect(() => {
    const productQuantity = cartItemsIdToQuantityMap.get(product.id);
    setQuantity(productQuantity !== undefined ? productQuantity : 1);
  }, [cartItemsIdToQuantityMap, product.id]);

  return (
    <div className='Card'>
      <ToastContainer/>
      <h3 className='ProductName'>{product.name}</h3>
      <p className='ProductDescription'>{product.description}</p>
      <div className='ProductPrice'>INR {product.price}</div>
      <div className='CategoryName'>{product.categoryName}</div>
      <div className='addCartOptions'>
        <input type="number" id="quantity" className='ProductQuantity' name="quantity" placeholder='Quantity' min="0" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <button className='card-tag subtle' onClick={() => { handleAddToCart(product.id, quantity); addToast(); }}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Menu;