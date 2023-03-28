import React from "react";
import videoBg from "../../assets/videoBg.mp4";
import "./home.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const HomeHeader = () => {
  const line2 = "PIGEON LOGISTICS";
  
  const sentance = {
    hidden : { opacity : 1},
    visible  : {
      opacity : 1,
      transition : {
        delay : 0.5,
        staggerChildren : 0.1
      },
    },
  }

  const letter = {
    hidden : {
      opacity : 0, y : 50,
    },
    visible: {
      opacity : 1,
      y : 0
    },
  }

  return (
    <motion.div
      className="mainVideo"
      initial={{scaleY: 0}}
      animate={{scaleY : 1}}
      exit={{scaleY: 0}}
      transition={{duration  : 0.45}}
    >
      <div className="overLay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div className="content"
      


      >
        <motion.h1
          className="text-7xl text-white growth"
          variants={sentance}
        initial='hidden'
        animate='visible'
        
        >
            {line2.split('').map((char, index) => {
          return (
            <motion.span key={char + '-' + index} variants={letter}>
              {char}
            </motion.span>
          )
        })}
        </motion.h1>

        <motion.h3 className="text-3xl text-white growth"
         initial={{ x: 0 }}
         animate={{ x: [0, -400, 500, 0] }}
         transition={{ duration: 3, delay: 0.3 }}
         whileHover={{ scale: 1.5, opacity: 0.5 }}

       
        > Your Trusted Forwarder
      
        </motion.h3>
        <button className="home-Btn growth">
          <NavLink to="/about">See More</NavLink>
        </button>
      </div>
    </motion.div>
  );
};

export default HomeHeader;
