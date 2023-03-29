import React from "react";
import "./aboutHeader.css";
import Overview from "../overView/Overview";
import { motion } from "framer-motion";
import ImageContainer from "./ImageContainer";
import AnimateHeading from "../animateText/AnimateHeading";

const AboutHeader = () => {

  return (
    <>
      <motion.div
        className="about-header-container"
  
        initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
    >
        <div className="about_header_text">
         <AnimateHeading line="LOGISTICS AND SUPPLY"/>
          <motion.h3
          
          initial={{ y: -1000 }}
           animate={{ y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
          >
            With meticulously chosen carriers, we provide scheduled service on
            the world's major air routes so you can plan with confidence and
            become more efficient. We provide a variety of highly flexible
            packages so you can choose delivery speeds that best suit your
            needs.
          </motion.h3>
        </div>
        <div className="about_header_image grid grid-cols-1 gap-2 lg:grid-cols-3 lg:place-items-center">

           <ImageContainer
        imageSrc="/images/aboutHeader/building.jpg"
        title="ASSOCIATION"
        linkTo="/company"
      />
      <ImageContainer
        imageSrc="/images/aboutHeader/culture.jpg"
        title="Philosophy"
        linkTo="/company"
      />
      <ImageContainer
        imageSrc="/images/aboutHeader/career.jpg"
        title="Career"
        linkTo="/company"
      />
        </div>
      </motion.div>
      <Overview />
    </>
  );
};

export default AboutHeader;
