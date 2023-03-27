import React from "react";
// import About from "../about/About";
import AboutHeader from "../about_Header/AboutHeader";
import CallButton from "../call/CallButton";
import Contact from "../contact_us/Contact";
import Qoute from "../qoute/Qoute";
import Services from "../services/Services"
import HomeHeader from "./HomeHeader";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div 
    // initial={{opacity: 0}}
    // animate={{opacity : 1}}
    // exit={{opacity: 0}}

    initial={{width : 0}}
    animate={{width : "100%"}}
    exit={{x : window.innerWidth , transition : {duration : 0.5}}}
    >
    <HomeHeader />
    <AboutHeader />
    <Services />
    <Qoute />
    <Contact />
    <CallButton className='callButton absolute top-4 right-0' />
    </motion.div>
  );
};

export default Home;
