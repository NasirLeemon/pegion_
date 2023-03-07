import React from "react";
// import About from "../about/About";
import AboutHeader from "../about_Header/AboutHeader";
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
    </>
  );
};

export default Home;
