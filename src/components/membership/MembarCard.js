import React from "react";
import './carousel.css'

const MembarCard = ({ image, text }) => {
  return (
    <div className="membercard flex flex-col md:flex-row md:justify-center md:items-end md:p-10 gap-2 md:gap-5">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="membercardText">
        <h2 className="text-[20px]">{text}</h2>
      </div>
    </div>
  );
};

export default MembarCard;
