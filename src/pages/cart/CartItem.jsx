import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";

function CartItem({ product }) {
  const { id, productName, price, productImage } = product;
  const { cartItem, addToCart, removeFromCart, changeCartItemTotal } =
    useContext(ShopContext);
  return (
    <div className="cartItem">
      <img src={productImage} alt="img" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <div className="countHandler">
        <button className="btn-add" onClick={() => removeFromCart(id)}>
          -
        </button>
        <input
          className="input-btn"
          type="text"
          value={cartItem[id]}
          onChange={(e) => changeCartItemTotal(Number(e.target.value), id)}
        />
        <button className="btn-add" onClick={() => addToCart(id)}>
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;
