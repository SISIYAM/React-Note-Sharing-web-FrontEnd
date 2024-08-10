import React, { useState } from "react";
import "./star.css";

function Star({ onChangeRating }) {
  const [rating, setRating] = useState(0);

  //star click events
  const handleStarClick = (index) => {
    setRating(index + 1);

    if (onChangeRating) {
      onChangeRating(index + 1);
    }
  };

  return (
    <div className="stars">
      {[...Array(5)].map((_, index) => (
        <i
          key={index}
          className={`fas fa-star ${rating > index ? "active" : ""}`}
          onClick={() => handleStarClick(index)}
        ></i>
      ))}
    </div>
  );
}

export default Star;
