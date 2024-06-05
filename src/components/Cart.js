// src/components/Cart.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

function Cart({ cartItems, updateCart }) {
  const handleQuantityChange = (index, quantity) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = parseInt(quantity);
    updateCart(newCartItems);
  };

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className='cart'>
      <h1>Cart</h1>
      {cartItems.map((item, index) => (
        <div key={index} className='cart-item'>
          <h2>{item.name}</h2>
          <p>{item.price}</p>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) => handleQuantityChange(index, e.target.value)}
          />
        </div>
      ))}
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Price: {totalPrice}</p>
      <Link to="/checkout" className='checkout-link'>Proceed to Checkout</Link>
    </div>
  );
}

export default Cart;
