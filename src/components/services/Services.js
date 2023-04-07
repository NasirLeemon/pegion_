import React from "react";
import ServiceItem from "./ServiceItem";
import "./services.css";
import { motion } from "framer-motion";
import AnimateHeading from "../animateText/AnimateHeading";
import ServiceState from "./ServiceState";


const Services = () => {



  return (
    <>
      <motion.div className="serviceMain"
      
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
      >
        <div className="serviceTitle">
         <AnimateHeading line='SERVICES' />
          <motion.h3
           initial={{ x: -1000 }}
           animate={{ x: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
          >
    Pigeon Logistics is specialized in shipping and distribution of Fashion merchandise from Bangladesh to the United States, Canada, Europe and other countries in the world.
    Pigeon Logistics provides exceptional freight shipping services via:
 
</motion.h3>
        </div>
        
          <div className="serviceItems grid grid-flow-col grid-rows-3 lg:grid-rows-2 gap-5 ">
            {ServiceState?.map(service => (
              <ServiceItem
              key={service?.id}
              service={service}
              />
              ))}
          </div>
        <div>
        </div>
      </motion.div>
      <div></div>
    </>
  );
};

export default Services;
