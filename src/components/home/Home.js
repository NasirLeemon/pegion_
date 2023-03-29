import React from "react";
import AboutHeader from "../about_Header/AboutHeader";
import Career from "../Career/Career";
import Contact from "../contact_us/Contact";
import Qoute from "../qoute/Qoute";
import Services from "../services/Services"
import HomeHeader from "./HomeHeader";
const Home = () => {
  return (
    <div>
    <HomeHeader />
    <AboutHeader />
    <Services />
    <Career />
    <Qoute />
    <Contact />
    </div>
  );
};

export default Home;
