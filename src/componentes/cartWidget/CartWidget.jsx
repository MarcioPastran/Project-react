import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

const CartWidget = () => {
  let count = 0;
  return (
    <div className="cart">
      <MdOutlineShoppingCart />
    </div>
  );
};

export default CartWidget;
