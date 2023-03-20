import React from "react";
import ServiceItem from "./ServiceItem";
import "./services.css";
// import { BiPaperPlane } from 'react-icons/bs'


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
      <div className="serviceMain">
        <div className="serviceTitle">
          <h1>Services</h1>
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
      </div>
      <div></div>
    </>
  );
};

export default Services;
