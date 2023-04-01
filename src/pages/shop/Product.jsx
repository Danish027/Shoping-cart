import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";

function Product({ data }) {
  const { id, productName, price, productImage } = data;
  const { addToCart, cartItem } = useContext(ShopContext);
  const cartItemAmount = cartItem[id];
  return (
    <div className="product">
      <img src={productImage} alt="img" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
}

export default Product;
