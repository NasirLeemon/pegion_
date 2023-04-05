import React from "react";
import "./carousel.css";
import MembarCard from "./MembarCard";

const Carousel = () => {
  return (
    <div className="carousel flex justify-center items-center p-10">
      <div className="card">
        <MembarCard
          className="card"
          image="/images/membership/bffa.png"
          text="Bangladesh Freight Forwarders Association"
        />
      </div>
      <div className="card">
        <MembarCard
          className="card"
          image="/images/membership/bgcci.png"
          text="Bangladesh-German Chamber of Commerce & Industry"
        />
      </div>
    </div>
  );
};

export default Carousel;
