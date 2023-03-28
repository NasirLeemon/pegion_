import React from "react";
import AboutHeader from "../about_Header/AboutHeader";
import CallButton from "../call/CallButton";
import Contact from "../contact_us/Contact";
import Qoute from "../qoute/Qoute";
import Services from "../services/Services"
import HomeHeader from "./HomeHeader";
// import { motion } from "framer-motion";
const Home = () => {
  return (
    <div>
    <HomeHeader />
    <AboutHeader />
    <Services />
    <Qoute />
    <Contact />
    <CallButton className='callButton absolute top-4 right-0' />
    </div>
  );
};

export default Home;
