import React from "react";
// import About from "../about/About";
import AboutHeader from "../about_Header/AboutHeader";
import CallButton from "../call/CallButton";
import Contact from "../contact_us/Contact";
import Overview from "../overView/Overview";
import Services from "../services/Services"
import HomeHeader from "./HomeHeader";
const Home = () => {
  return (
    <>
    <HomeHeader />
    <AboutHeader />
    <Services />
    <Overview />
    <Contact />


    <CallButton className='callButton absolute top-4 right-0' />
    </>
  );
};

export default Home;
