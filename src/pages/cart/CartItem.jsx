import React from "react";
import "./CartItem.css";
import { useAppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

const CartItem = ({ onContinueShopping }) => {
  const { cart, incrementCount, decrementCount, removeFromCart } =
    useAppContext();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    const alItems = Object.values(cart);
    let temp = 0;
    for (let i = 0; i < alItems.length; i++) {
      temp += alItems[i].amount * alItems[i].cost.split("$")[1];
    }

    return temp;
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    console.log("calculating", item);
    return item.amount * item.cost.split("$")[1];
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: "black" }}>
        Total Cart Amount: ${calculateTotalAmount()}
      </h2>
      <div>
        {Object.values(cart).map((item) => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button
                  className="cart-item-button cart-item-button-dec"
                  onClick={() => decrementCount(item.image)}
                >
                  -
                </button>
                <span className="cart-item-quantity-value">{item.amount}</span>
                <button
                  className="cart-item-button cart-item-button-inc"
                  onClick={() => incrementCount(item.image)}
                >
                  +
                </button>
              </div>
              <div className="cart-item-total">
                Total: ${calculateTotalCost(item)}
              </div>
              <button
                className="cart-item-delete"
                onClick={() => removeFromCart(item.image)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{ marginTop: "20px", color: "black" }}
        className="total_cart_amount"
      ></div>
      <div className="w-fit h-fit flex flex-col">
        <Link className="get-started-button1" to={"/browse"}>
          Continue Shopping
        </Link>
        <br />
        <button
          onClick={(e) => {
            window.alert("Functionality to be added for future reference");
          }}
          className="get-started-button1"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
