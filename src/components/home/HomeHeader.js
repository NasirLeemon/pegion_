import React from 'react'
import videoBg from "../../assets/videoBg.mp4";
import "./home.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";



const HomeHeader = () => {
  return (
    <motion.div className="mainVideo"
    initial={{opacity: 0}}
    animate={{opacity : 1}}
    exit={{opacity: 0}}
    >
        <div className="overLay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
          <h1 className="text-7xl text-white growth">Pigeon Logistics</h1>
          <h3 className="text-3xl text-white growth">Your Trusted Forwarder</h3>
          <button className="home-Btn growth">
            <NavLink to="/about">See More</NavLink>
          </button>
        </div>
      </motion.div>
  )
}

export default HomeHeader