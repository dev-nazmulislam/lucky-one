import React from "react";
import SelectItem from "../SelectItem/SelectItem";
import "./Cart.css";

const Cart = ({ cart, dleletCart, clearAll, choseRandom }) => {
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
            alert("already 4 item selected")
          : cart.map((item) => (
              <SelectItem key={item.Id} item={item} dleletCart={dleletCart} />
            ))}
      </div>
      <button
        onClick={() => choseRandom()}
        className="chose-btn p-1 rounded fs-4 border-0 w-100 my-2"
      >
        Select one For me
      </button>
      <button
        onClick={() => clearAll()}
        className="chose-btn p-1 rounded fs-4 border-0 w-100 my-2"
      >
        Chose again
      </button>
    </div>
  );
};

export default Cart;
