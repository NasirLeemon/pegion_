import React, { useState } from "react";
import videoBg from "../../assets/video.mp4";
import "./home.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import AnimateHeading from "../animateText/AnimateHeading";

const HomeHeader = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <motion.div
      className="mainVideo"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
    >
      <div className="overLay"></div>
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        onCanPlayThrough={handleVideoLoad}
      />
      {!isVideoLoaded && <div className="loader"></div>}
      <div className={`content ${isVideoLoaded ? "visible" : ""}`}>
        <AnimateHeading
          line="PIGEON LOGISTICS"
          classes="text-[85px] text-white growth"
        />

        <motion.h3
          className="text-3xl text-white growth"
          initial={{ x: 0 }}
          animate={{
            x: [0, -400, 500, 0],
            transition: { duration: 3, loop: Infinity, delay: 0.3 },
          }}
          whileHover={{ scale: 1.5, opacity: 0.5 }}
        >
          Your Trusted Forwarder
        </motion.h3>
        <button className="home-Btn growth">
          <NavLink to="/about">See More</NavLink>
        </button>
      </div>
    </motion.div>
  );
};

export default HomeHeader;
