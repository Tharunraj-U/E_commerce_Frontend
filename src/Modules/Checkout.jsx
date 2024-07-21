// Checkout.js
import React from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/Checkout.css'; // Import the CSS file with the correct path

const Checkout = () => {
  const { id } = useParams();
  
  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <p>Product ID: {id}</p>
      <p>Thank you for your purchase! Your order is being processed.</p>
      <button className="continue-shopping-button" onClick={() => window.location.href = '/'}>
        Continue Shopping
      </button>
    </div>
  );
};

export default Checkout;
