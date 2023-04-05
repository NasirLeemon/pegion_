import React from "react";
import "./carousel.css";
import MembarCard from "./MembarCard";

const Carousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel">
        <MembarCard
          image="/images/membership/bffa.png"
          text="Bangladesh Freight Forward Association"
        />
        <MembarCard
          image="/images/membership/bgcci.png"
          text="Bangladesh-German Chamber of Commerce & Industry"
        />
      </div>
    </div>
  );
};

export default Carousel;