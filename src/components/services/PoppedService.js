import React from "react";
import {ImCross} from 'react-icons/im'


const PoppedService = ({ setPopUp, singleService }) => {
    const handleClick=()=>{
        setPopUp(false) 
    }
  return (
    <div className="poppedMain">
      PoppedService
      <h1>{singleService?.title}</h1>
      <h3>{singleService?.description}</h3>
      <img src={singleService?.image} alt='' />
      <button onClick={handleClick}><ImCross /></button>
    </div>
  );
};

export default PoppedService;
