import React from "react";
import "./star.css";
function ActiveStar(props) {
  return (
    <div className="stars">
      {[...Array(5)].map((_, index) => (
        <i
          key={index}
          className={`fas fa-star ${props.rating >= index + 1 ? "active" : ""}`}
        ></i>
      ))}
    </div>
  );
}

export default ActiveStar;
