import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";
import { PRODUCTS } from "../../products";
import CartItem from "./CartItem";
import "./cart.css";
import { useNavigate } from "react-router-dom";
function Cart() {
  const { cartItem, getTotalCartAmount } = useContext(ShopContext);
  const navigate = useNavigate();
  const totalAmount = getTotalCartAmount();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItem[product.id] !== 0) {
            return <CartItem product={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="Checkout">
          <h2>Total Amount : ${totalAmount}</h2>
          <button className="btn" onClick={() => navigate("/")}>
            Continue Shoping
          </button>
          <button className="btn">Checkout</button>
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
}

export default Cart;
