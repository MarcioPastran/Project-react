import React, { createContext, useState } from "react";
const Context = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addItem = (productToAdd, quantity) => {
    const newItem = {
      ...productToAdd,
      quantity,
    };
    const isInCart = cart.some((prod) => prod.id === newItem.id);
    if (isInCart) {
      const upDatedCart = cart.map((prod) =>
        prod.id === newItem.id
          ? { ...prod, quantity: prod.quantity + quantity }
          : prod
      );
      setCart(upDatedCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  const removeItem = (id) => {
    const upDatedCart = cart.filter((prod) => prod.id !== id);
    setCart(upDatedCart);
  };
  const clearCart = () => {
    setCart([]);
  };
  const getQuantity = () => {
    let total = 0;
    cart.forEach((prod) => {
      total = total + prod.quantity;
    });
    return total;
  };
  const getTotalPrice = () => {
    const total = cart.reduce(
      (actual, item) => actual + item.price * item.quantity,
      0
    );
    return total;
  };
  //58,35
  return (
    <Context.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        getQuantity,
        getTotalPrice,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
