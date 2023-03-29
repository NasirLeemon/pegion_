import React, { useEffect } from "react";
import videoBg from "../../assets/videoBg.mp4";
import "./home.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import AnimateHeading from "../animateText/AnimateHeading";

const HomeHeader = () => {
  useEffect(() => {
    const preloadVideo = async () => {
      try {
        await videoBg.preload();
      } catch (error) {
        console.log("Error preloading video: ", error);
      }
    };
    preloadVideo();
  }, []);

  return (
    <motion.div
      className="mainVideo"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
    >
      <div className="overLay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <AnimateHeading
          line="PIGEON LOGISTICS"
          classes="text-[75px] text-white growth"
        />

        <motion.h3
          className="text-3xl text-white growth"
          initial={{ x: 0 }}
          animate={{ x: [0, -400, 500, 0] }}
          transition={{ duration: 3, delay: 0.3 }}
          whileHover={{ scale: 1.5, opacity: 0.5 }}
        >
          {" "}
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