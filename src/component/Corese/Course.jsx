import React from "react";
import "./Course.css";
import { BsCartCheck } from "react-icons/bs";

const Course = ({ course, handleAddToCart }) => {
  const { courseName, description, price, Url } = course;

  return (
    <div className="col">
      <div className="p-3 rounded shadow-lg">
        <img className="card-img" src={Url} alt="" />

        <h5 className="mt-3">{courseName}</h5>
        <p>
          {description.slice(0, 80)}{" "}
          <span className="text-success pointer">More...</span>
        </p>
        <p>
          Price: <span className="text-danger">{price}</span>
        </p>
        <button
          onClick={() => handleAddToCart(course)}
          className="btn btn-primary fw-bold "
        >
          Add to Cart <BsCartCheck />
        </button>
      </div>
    </div>
  );
};

export default Course;
