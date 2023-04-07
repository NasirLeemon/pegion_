import React from "react";
import "./carousel.css";
import MembarCard from "./MembarCard";

const Carousel = () => {
  return (
    <div className="carousel-container">
      <div className="text-center p-4 lg:p-1 font-extrabold text-maincolor">MEMBERSHIP</div>
      <div className="carousel">
        <MembarCard
          image="/images/membership/bffa.png"
      
        />
        <MembarCard
          image="/images/membership/bgcci.png"
        
        />
      </div>
    </div>
  );
};

export default Carousel;