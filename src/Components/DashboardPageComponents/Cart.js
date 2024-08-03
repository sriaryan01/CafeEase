import React, { useState, useEffect } from 'react';
import { fetchCart, handleAddToCart } from '../../Services/cart_service';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCart = async () => {
      try {
        const cart = await fetchCart();
        console.log("Cart fetched successfully")
        setCart(cart);
        setLoading(false);

      } catch (error) {
        setError(error);
        setLoading(false);
        console.log("Error while fetching cart");
      }
    };

    getCart();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (

    <div className='card-container'>
      <div>Your Cart</div>

      <div>
        {cart.items.map(item => (
          <CartItems key={item.productId} item={item} setCart={setCart} />
        ))}
      </div>

    </div>
  );
};


const CartItems = ({ item, setCart }) => {
  var [quantity, setQuantity] = useState(1);
  quantity = item.quantity;

  const handleQuantityChange = async (e) => {
    
    const qty = e.target.value;
    
    if (qty != '') {
      
      toast.success("Quantity updated...", {
        theme: "dark"
      });
      var cart = await handleAddToCart(item.productId, qty);
      console.log(cart)
      setCart(cart)
    }
  };

  const handleRemoveFromCart = async (productId) => {
    try {
      toast.error("Item removed!!!", {
        theme: "dark"
      });
      const updatedCart = await handleAddToCart(productId, 0);
      setCart(updatedCart);
    } catch (error) {
      console.error("Error removing from cart", error);
    }
  };

  return (
    <div className='Cart-Card'>
      <div className='left-side'>
        <h3 className='ProductName'>{item.productName}</h3>
        <div className='PricePerUnit'>Price Per Unit - <p className='ProductPrice'>INR {item.pricePerUnit}</p></div>
        <div className='OverallPrice'>Overall Price - <p className='ProductPrice overall'>INR {item.price}</p></div>
      </div>
      <div className='addCartOptions right-side'>
        <input type="number" id="quantity" className='ProductQuantity item-quantity' name="quantity" placeholder='Quantity' min="0" defaultValue={1} value={quantity} onChange={(e) => handleQuantityChange(e)} />
        <button className='card-tag subtle' onClick={() => handleRemoveFromCart(item.productId)}>Remove from Cart</button>
      </div>
    </div>
  );
};

export default Cart;
