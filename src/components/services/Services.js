import React from "react";
import ServiceItem from "./ServiceItem";
import "./services.css";
// import { BiPaperPlane } from 'react-icons/bs'
import { motion } from "framer-motion";
import AnimateHeading from "../animateText/AnimateHeading";


const Services = () => {

 const initialState = [
  {
      id: 1,
      title: "AIR FREIGHT",
      subTitle : 'Air Freight is Easy',
      image: "/images/services/air.jpg",
    },
    {
      id: 2,
      title: "TRUCKING SERVICE",
      subTitle : 'Trucking is Easy',
      image: "/images/services/truck.jpg",
    },
    {
      id: 3,
      title: "OCEAN FREIGHT",
      subTitle: "Ocean Feight is Easy",
      image: "/images/services/ship.jpg",
    },
    {
      id: 4,
      title: "CUSTOM CLEARANCE",
      subTitle: "Easy Custom Clearance ",
      image: "/images/services/custom.jpg",
    },
    {
      id: 5,
      title: "WEARHOUSE",
      subTitle: "Easy Wearhouse Access",
      image: "/images/services/wearhouse.jpg",
    },
]


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
            {initialState?.map(service => (
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
