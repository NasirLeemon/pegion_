import React from 'react'
import videoBg from "../../assets/videoBg.mp4";
import "./home.css";
import { NavLink } from "react-router-dom";

const HomeHeader = () => {
  return (
    <div className="mainVideo">
        <div className="overLay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
          <h1 className="text-7xl text-white growth">Pigeon Logistics</h1>
          <h3 className="text-3xl text-white growth">Your Trusted Forwarder</h3>
          <button className="home-Btn growth">
            <NavLink to="/about">See More</NavLink>
          </button>
        </div>
      </div>
  )
}

export default HomeHeader