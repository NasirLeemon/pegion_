import React from "react";
import { Link, useParams } from "react-router-dom";
import ContactFooter from "../contact_footer/ContactFooter";
import "./singleService.css";
import { motion } from "framer-motion";



const SingleService = ({ services }) => {
  // this services is coming from app js

  const { id } = useParams();
  const service = services.find((service) => service.id === parseInt(id));

  const { title, image,image2, icon, description } = service;

  const { body, items } = description;

  return (
    <>
      <motion.div className="serviceMain"
      
      initial={{width : 0}}
      animate={{width : "100%"}}
      exit={{x : window.innerWidth , transition : {duration : 0.5}}}
      >
        <div className="serviceTitle">
          <h1>{title}</h1>
        </div>
        <div className="quote">
          <Link to="/quote">Get Qoute!</Link>
        </div>
        <div className="serviceSingleItem">
          <div className="serviceItemImage">
            <img className="secondImage" src={image2} alt={title} />
            <br />
            <img src={image} alt={title} />
          </div>
          <div className="serviceItemDescription">
            <p>
              <span>Pigeon Logistics </span>
              {body}
            </p>
            <ul>
              {items.map((item) => (
                <li key={item.length + 1}>
                  {icon}
                  {item}
                </li>
              ))}
            </ul>
            <div className="quote">
            <Link to="/quote">Get Qoute!</Link>
          </div>
          </div>
        </div>
       
      </motion.div>
      <ContactFooter />

    </>
  );
};

export default SingleService;
