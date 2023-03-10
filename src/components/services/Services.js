import React from "react";
import ServiceItem from "./ServiceItem";
import "./services.css";


const Services = ({services}) => {

 

  return (
    <>
      <div className="serviceMain">
        <div className="serviceTitle">
          <h1>Services</h1>
        </div>
        
          <div className="serviceItems grid grid-flow-col grid-rows-3 lg:grid-rows-2 gap-5 ">
            {services?.map((service) => (
              <ServiceItem
              key={service.id}
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
