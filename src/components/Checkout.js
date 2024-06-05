import React from 'react';
import './Checkout.css';

function Checkout({ cartItems }) {
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className='checkout'>
      <h1>Checkout</h1>
      {cartItems.map((item, index) => (
        <div key={index} className='checkout-item'>
          <h2>{item.name}</h2>
          <p>Price: {item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Price: {totalPrice}</p>
      <button>Confirm Order</button>
    </div>
  );
}

export default Checkout;
