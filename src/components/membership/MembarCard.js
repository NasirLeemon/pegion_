import React from "react";
import './carousel.css'

const MembarCard = ({ image, text }) => {
  return (
    <div className="membercard sm:flex-col sm:gap-10 md:flex md:justify-center md:items-end md:gap-10">
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h1>Member of - </h1>
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default MembarCard;
