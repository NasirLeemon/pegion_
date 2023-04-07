import React from "react";
import { AiFillMail, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
import { FaHandshake, FaLinkedinIn } from "react-icons/fa";


const ContactFooter = () => {
  const logo = '/images/logo/cropped-PIGION-2020-1-2021.png'
  const address = {
    line1 : 'House No# 425, Road No# 30, New DOHS',
    line2 : 'Mohakhali, Dhaka-1206,Bangladesh.', 
  }
  
  const hotline = {
    phone1 : '+88 02 48810365',
    phone2 : '+88 02-48810364',
  }
  
  
  const services = [
    {
      id: 1,
      name: 'International',
    },
    {
      id: 2,
      name: 'Domestic',
    },
    {
      id: 3,
      name: 'Transport',
    },
    {
      id: 4,
      name: 'International',
    },
    {
      id: 5,
      name: 'International',
    }
  ];
  const networks = [
    {
      id: 1,
      name: 'Africa',
    },
    {
      id: 2,
      name: 'Asia',
    },
    {
      id: 3,
      name: 'Caribbean',
    },
    {
      id: 4,
      name: 'Europe',
    },
    {
      id: 5,
      name: 'France',
    },
    {
      id: 6,
      name: 'Middle East',
    },
  ];
  return (
    <div className="contact-footer wrapper">
      <div className="contact-footer-logo">
        <img src={logo} alt="" />
        <div className="contact-us">
          <div className="contact-us-icon">
          <AiFillMail size={30} />
            <div>info@pigeonlogisticsbd.com</div>
          </div>
          <div className="contact-us-icon">
            <FaHandshake size={34} />
            <div>Careers</div>
          </div>
        </div>
        <div className="flex gap-3 pb-4">
          
          <AiFillTwitterCircle size={24} />
          <AiFillYoutube size={24} />
          <FaLinkedinIn size={24} />
        </div>
      </div>
      <div className="contact-footer-address flex flex-col">
        <h1 className="text-3xl">Address</h1>
        <p className="mt-4 font-thin pt-2">{address.line1}</p>
        <p className="font-thin pt-2" >{address.line2}</p>
      </div>
      <div className="contact-footer-phone">
        <h1 className="text-3xl">Hotline</h1>
        <p className="mt-4 font-thin pt-2">{hotline.phone1}</p>
        <p className="font-thin pt-2">{hotline.phone2}</p>
      </div>
      <div className="contact-footer-service flex flex-col">
        <h1 className="text-3xl">Our Services</h1>
        {services.map((service, id) => (
          <a
            key={id}
            className="font-thin hover:underline pt-4"
            href={service?.link}
          >
            {service.name}
          </a>
        ))}
      </div>
      <div className="contact-footer-network flex flex-col">
        <h1 className="text-3xl">Our Network</h1>
        {networks.map((location, id) => (
          <a
            key={id}
            className="font-thin hover:underline pt-4"
            href={location?.link}
          >
            {location.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactFooter;
