import { Navbar } from "@material-tailwind/react";
import React, { useState } from "react";
import Services from "../services/Services";
import "./about.css";
import Achievements from "./Achievements";
import History from "./History";
import Management from "./Management";

const About = () => {

  const [value, setValue] = useState('1');
  const [isActive, setIsActive] = useState('');

  const handleClick = (event) => {
    setValue(event.target.id)
    setIsActive(event.target.id);
  }

  return (
    <>
    <div className="aboutContainer bg-cyan-100">
      <div className="aboutTitle">
        <h1 className="">About Us</h1>
      </div>
      <div className="aboutBtns">
      <button key={1} id={'1'} className={` ${isActive === "1" ? "activeBtn" : undefined}`} onClick={handleClick}>History</button>
      <button key={2} id={'2'} className={` ${isActive === "2" ? "activeBtn" : undefined}`} onClick={handleClick}>Management</button>
      <button key={3} id={'3'} className={` ${isActive === "3" ? "activeBtn" : undefined}`} onClick={handleClick}>Achievements</button>
      </div>

      <div className="about-content">
      {value === '1' && 
      <History />
    }
      {value === '2' && 
      <Management />
      }
      {value === '3' && 
      <Achievements />
      }
      </div>
    </div>
    <div>
      <Services />
    </div>
    </>
  );
};

export default About;
