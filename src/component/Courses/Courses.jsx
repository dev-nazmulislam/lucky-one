import React from "react";
import { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import Course from "../Corese/Course";
import "./Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  const dleletCart = (id) => {
    const remainigCart = cart.filter((item) => item.Id !== id);
    setCart(remainigCart);
  };

  return (
    <div className="bg-light">
      <h2 className="text-success text-center pt-5">
        Get best Courses & Bost Yours Knowledge
      </h2>
      <div className="row m-0">
        <div className="col-md-9">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mx-2">
            {courses.map((course) => (
              <Course
                key={course.Id}
                course={course}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
        <div className="col-md-3 left-cart">
          <Cart dleletCart={dleletCart} cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Courses;
