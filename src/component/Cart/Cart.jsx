import React from "react";
import SelectItem from "../SelectItem/SelectItem";
import "./Cart.css";

const Cart = ({ cart, dleletCart }) => {
  const cartCount = cart.length;
  return (
    <div className="cart">
      <h4 className="text-center mb-3">Selected Item:{cart.length}</h4>
      <hr />
      <div className="item-container">
        {cartCount > 4
          ? cart.pop() &&
            cart.map((item) => (
              <SelectItem key={item.Id} item={item} dleletCart={dleletCart} />
            )) &&
            alert("alrady 4 item selected")
          : cart.map((item) => (
              <SelectItem key={item.Id} item={item} dleletCart={dleletCart} />
            ))}
      </div>
    </div>
  );
};

export default Cart;
