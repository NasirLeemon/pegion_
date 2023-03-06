import React, { useState } from "react";
import PoppedService from "./PoppedService";
import ServiceItem from "./ServiceItem";
import "./services.css";

const serviceItemData = [
  {
    id: 1,
    title: "AIR FREIGHT",
    description: "Air Feight is Easy",
    image: "/images/services/air.jpg",
  },
  {
    id: 2,
    title: "TRUCKING SERVICE",
    description: "Trucking is Easy",
    image: "/images/services/truck.jpg",
  },
  {
    id: 3,
    title: "OCEAN FREIGHT",
    description: "Ocean Feight is Easy",
    image: "/images/services/ship.jpg",
  },
  {
    id: 4,
    title: "CUSTOM CLEARANCE",
    description: "Easy Custom Clearance ",
    image: "/images/services/custom.jpg",
  },
  {
    id: 5,
    title: "WEARHOUSE",
    description: "Easy Wearhouse Access",
    image: "/images/services/wearhouse.jpg",
  },
];

const Services = () => {
  const [popUp, setPopUp] = useState(false);
  const [singleService, setSingleService] = useState(null);

  // console.log(id);
  const foundService = (id) =>{
    console.log(id);
   serviceItemData.map((service) => {
     if (service.id === id) {
        setSingleService(service)
      }
      return service
    })
  }
  
console.log(singleService);
  return (
    <>
      <div className="serviceMain">
      {!popUp && 
      <>
        <div className="serviceTitle">
          <h1>Services</h1>
        </div>
        
          <div className="serviceItems grid grid-flow-col grid-rows-3 lg:grid-rows-2 gap-5 ">
            {serviceItemData?.map((service) => (
              <ServiceItem
              key={service.id}
              service={service}
              setPopUp={setPopUp}
              foundService={foundService}
              />
              ))}
          </div>
        </>
        }
        <div>
        {popUp && <PoppedService setPopUp={setPopUp} singleService={singleService}/>}
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Services;
