import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './te_order_dtls.css'; // Import the Cart CSS
import Te_Navbar from '../te_navbar/te_navbar';

const Te_Order_Dtls = () => {
  const food_Orders = [
    {
      id: 1,
      name: "Flavoured Biriyani-full",
      price: 230,
      quantity: 2,
      src:'https://www.priyom.in/wp-content/uploads/2022/06/Chicken-Biriyani-500x500.png'
      // Add more item details here
    },
    {
      id: 2,
      name: "Chicken rice",
      price: 150,
      quantity: 1,
      src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7O6RKDYCyPq-10N93Lq1fX_R-2OoK1K_1_A3MLhBhog&s'
      // Add more item details here
    },
    // Add more cart items as needed
  ];
  
  const [orderItems, setOrderItems] = useState(food_Orders);
  /*
  useEffect(() => {

    const fetchOrderItems = async () => {
      try {
        const response = await axios.get('/api/orders'); // Adjust the API endpoint as needed
        setOrderItems(response.data.orderItems);
      } catch (error) {
        console.error('Error fetching order items:', error);
      }
    };

    fetchOrderItems();
  }, []);
*/
  const removeFromOrders = async (itemId) => {
    /*try {
      await axios.delete(`/api/cart/${itemId}`); // Adjust the API endpoint as needed
      setCartItems(cartItems.filter(item => item.id !== itemId));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }*/
  };
  
  return (
    <div>
      <Te_Navbar />
      <div className="te-orders-container">
        <div className="order-details">
          <h2>Order Details</h2>
          {orderItems.map((item1) => (
            <div key={item1.id} className="order-item">
              <img src={item1.src} alt={item1.name} />
              <p className='order-item-name'>{item1.name}</p>
              <div className="order-item-details">
                
                <p>Price: ${item1.price}</p>
                <p>Quantity: {item1.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Te_Order_Dtls;
