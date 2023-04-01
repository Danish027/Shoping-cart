import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  const cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

function ShopContextProvider({ children }) {
  const [cartItem, setCartItem] = useState(getDefaultCart);

  const addToCart = (itemId) => {
    setCartItem((array) => ({ ...array, [itemId]: array[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItem((array) => ({ ...array, [itemId]: array[itemId] - 1 }));
  };

  const changeCartItemTotal = (newTotal, itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: newTotal }));
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let iteminfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItem[item] * iteminfo.price;
      }
    }
    return totalAmount;
  };

  const contextValue = {
    cartItem,
    addToCart,
    removeFromCart,
    changeCartItemTotal,
    getTotalCartAmount,
  };
  console.log(cartItem);
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}

export default ShopContextProvider;
