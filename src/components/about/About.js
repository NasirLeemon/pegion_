import React, { useState } from "react";
import "./about.css";
import Achievements from "./Achievements";
import History from "./History";
import Management from "./Management";
import { motion } from "framer-motion";

const About = () => {
  const [value, setValue] = useState("1");
  const [isActive, setIsActive] = useState("");

  const handleClick = (event) => {
    setValue(event.target.id);
    setIsActive(event.target.id);
  };

  return (
  
      <motion.div className="aboutContainer"
      
      initial={{width : 0}}
      animate={{width : "100%"}}
      exit={{x : window.innerWidth , transition : {duration : 0.2}}}
      >
        <div className="aboutTitle">
          <h1 className="">About Us</h1>
        </div>
        <div className="aboutBtns">
          <button
            key={1}
            id={"1"}
            className={` ${isActive === "1" ? "activeBtn" : undefined}`}
            onClick={handleClick}
          >
            History
          </button>
          <button
            key={2}
            id={"2"}
            className={` ${isActive === "2" ? "activeBtn" : undefined}`}
            onClick={handleClick}
          >
            Management
          </button>
          <button
            key={3}
            id={"3"}
            className={` ${isActive === "3" ? "activeBtn" : undefined}`}
            onClick={handleClick}
          >
            Achievements
          </button>
        </div>

        <div className="about-content">
          {value === "1" && <History />}
          {value === "2" && <Management />}
          {value === "3" && <Achievements />}
        </div>
      </motion.div>
      
    
  );
};

export default About;
