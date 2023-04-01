import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./Product";
import "./shop.css";
function Shop() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Quality Shoping</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((products) => (
          <Product data={products} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
