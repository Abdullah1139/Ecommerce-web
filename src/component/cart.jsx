import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/context';
import './cart.css';

const Cart = () => {
  const Globalstate = useContext(CartContext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;
  const [isPaymentFormVisible, setIsPaymentFormVisible] = useState(false);
  const total = state.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleBuyNow = () => {
    setIsPaymentFormVisible(true);
  };

  const handleCancelPayment = () => {
    setIsPaymentFormVisible(false);
  };

  return (
    <div className="cart-container">
      {state.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty</p>
      ) : (
        state.map((item, index) => (
          <div key={index} className="cart-item">
            <h2 className="close-button" onClick={() => dispatch({ type: 'REMOVE', payload: item })}>x</h2>
            <img src={item.pic} alt={item.title} />
            <p>{item.title}</p>
            <div className="quantity-controls">
              <button onClick={() => dispatch({ type: 'INCREASE', payload: item })}>+</button>
              <p>{item.quantity}</p>
              <button onClick={() => dispatch({ type: 'DECREASE', payload: item })}>
                -
              </button>
            </div>
            <p>${item.quantity * item.price}</p>
          </div>
        ))
      )}
      {state.length > 0 && (
        <>
          <h2 className="total">Total: ${total}</h2>
          {!isPaymentFormVisible ? (
            <button className="buy-now-button" onClick={handleBuyNow}>Buy Now</button>
          ) : (
            <div className="payment-form">
              <h3>Payment Form</h3>
              <form>
                <label htmlFor="cardNumber">Card Number:</label>
                <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" />
                <label htmlFor="expiryDate">Expiry Date:</label>
                <input type="text" id="expiryDate" placeholder="MM/YY" />
                <label htmlFor="cvv">CVV:</label>
                <input type="text" id="cvv" placeholder="123" />
                <button type="submit">Proceed to Payment</button>
              </form>
              <button onClick={handleCancelPayment}>Cancel</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
