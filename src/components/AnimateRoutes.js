import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutHeader from "./about_Header/AboutHeader";
import Contact from "./contact_us/Contact";
import Home from "./home/Home";
import Qoute from "./qoute/Qoute";
import About from "./about/About";
import SingleService from "./service_items/SingleService";
import Services from "./services/Services";
import {AnimatePresence} from "framer-motion";
import Notfound from "./Notfound";
// import {} from "framer-motion/dist/framer-motion";


const AnimateRoutes = ({ initialState }) => {
  const location = useLocation();

  return (
    <div>
        <AnimatePresence>
      <Routes location={location} key={location?.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<AboutHeader />} />
        <Route path="/company" element={<About />} />
        <Route path="/services" element={<Services services={initialState} />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/:id" element={<SingleService services={initialState} />}/>
        <Route path="/quote" element={<Qoute />} />
        <Route path="*"  element={<Notfound />}/>
      </Routes>
        </AnimatePresence>
    </div>
  );
};

export default AnimateRoutes;
