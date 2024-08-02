// App.js
import { myAxios } from "./helper";
// import MenuCard from '../Components/DashboardPageComponents/menuCard';

export const handleAddToCart = async(productId, quantity) => {
    console.log(productId);
    console.log(quantity);
    let items = getListOfItem(productId, quantity)
    try {
      const response = await myAxios.put("/cart", items);
      const data = response.data.data;  // Accessing the array of products
      return data;
  } catch (error) {
      console.error('Error fetching product list:', error);
      throw error;
  }
  };

  const getListOfItem = (productId, quantity) => {
    return [
        {
            "productId": productId,
            "quantity": quantity
        }
    ];
};
