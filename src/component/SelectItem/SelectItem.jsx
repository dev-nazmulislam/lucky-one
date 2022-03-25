import React from "react";
import "./SelectItem.css";
import { AiFillDelete } from "react-icons/ai";

const SelectItem = ({ item, dleletCart }) => {
  const { courseName, Url } = item;
  return (
    <div className="d-flex justify-content-between align-items-center px-2">
      <img className="item-img mb-2" src={Url} alt="" />
      <p>{courseName}</p>
      <AiFillDelete className="delete-style" onClick={() => dleletCart(item.Id)} />
    </div>
  );
};

export default SelectItem;
