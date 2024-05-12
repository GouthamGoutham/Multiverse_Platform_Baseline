import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './sm_cart.css'; // Import the Cart CSS
import Sm_Navbar from '../sm_navbar/sm_navbar';

const Sm_cart = () => {
  const cartItems_data = [
    {
      id: 1,
      name: "Thapathy vijay in cool blue shirt",
      price: 20,
      quantity: 2,
      src:'https://webmerx.sgp1.cdn.digitaloceanspaces.com/theindianfab/product_images/wLCGTyLkeE-1678697729.webp'
      // Add more item details here
    },
    {
      id: 2,
      name: "Pants",
      price: 30,
      quantity: 1,
      src:'https://images.meesho.com/images/products/316900781/tdzix_512.webp'
      // Add more item details here
    },
    // Add more cart items as needed
  ];
  
  const orderItems_data = [
    {
      id: 1,
      name: "Shirt12",
      price: 20,
      quantity: 2,
      status:'Shipped',
      src:'https://images.meesho.com/images/products/316900781/tdzix_512.webp'
      // Add more item details here
    },
    {
      id: 2,
      name: "Pants2",
      price: 30,
      quantity: 1,
      status:'delivered',
      src:'https://images.meesho.com/images/products/316900781/tdzix_512.webp'
      // Add more item details here
    },
    // Add more order items as needed
  ];
  const [cartItems, setCartItems] = useState(cartItems_data);
  const [orderItems, setOrderItems] = useState(orderItems_data);
  /*
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('/api/cart'); // Adjust the API endpoint as needed
        setCartItems(response.data.cartItems);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    const fetchOrderItems = async () => {
      try {
        const response = await axios.get('/api/orders'); // Adjust the API endpoint as needed
        setOrderItems(response.data.orderItems);
      } catch (error) {
        console.error('Error fetching order items:', error);
      }
    };

    fetchCartItems();
    fetchOrderItems();
  }, []);
*/
  const removeFromCart = async (itemId) => {
    /*try {
      await axios.delete(`/api/cart/${itemId}`); // Adjust the API endpoint as needed
      setCartItems(cartItems.filter(item => item.id !== itemId));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }*/
  };
  
  return (
    <div>
      <Sm_Navbar />
      <div className="cart-container">
        <div className="cart-items">
          <h2>Cart Details</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="prod-item">
              <img src={item.src} alt={item.name}/>
              <p className='prod-text'>{item.name}</p>
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
        <div className="order-details">
          <h2>Order Details</h2>
          {orderItems.map((item1) => (
            <div key={item1.id} className="prod-item">
              <img src={item1.src} alt={item1.name}/>
              <p className='prod-text'>{item1.name}</p>
              <p>${item1.price}</p>
              <p>Quantity: {item1.quantity}</p>
              <p>Status: {item1.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sm_cart;
