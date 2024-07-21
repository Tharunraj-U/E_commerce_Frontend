// Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../Modules/CartContext';
import '../Styles/Cart.css'; // Import the CSS file

const Cart = () => {
  const { cart, removeFromCart, getTotal } = useContext(CartContext);

  const handleBuy = () => {
    // Implement buy/checkout logic here
    alert('Proceed to checkout!');
  };

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>No products in cart.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.imageUrl} alt={item.name} />
                  <div className="tooltip">{item.name}</div>
                </div>
                <div className="cart-item-details">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">${item.price}</p>
                  <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                  <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p className="cart-total">Total: ${getTotal().toFixed(2)}</p>
            <button className="buy-button" onClick={handleBuy}>Buy</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
