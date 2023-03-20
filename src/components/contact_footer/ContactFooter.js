import React from "react";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaHandshake, FaLinkedinIn } from "react-icons/fa";

const ContactFooter = () => {
  return (
    <div className="contact-footer wrapper">
      <div className="contact-footer-logo">
        <img src="/images/logo/cropped-PIGION-2020-1-2021.png" alt="" />
        <div className="contact-us">
          <div className="contact-us-icon">
            <BsFillChatDotsFill size={30} />
            <div>Contact Us</div>
          </div>
          <div className="contact-us-icon">
            <FaHandshake size={34} />
            <div>Careers</div>
          </div>
        </div>
        <div className="flex gap-3 pb-4">
          {/* <BsFacebook size={24}/> */}
          <AiFillTwitterCircle size={24} />
          <AiFillYoutube size={24} />
          <FaLinkedinIn size={24} />
        </div>
      </div>
      <div className="contact-footer-address flex flex-col">
        <h1 className="text-3xl">Address</h1>
        <p className="mt-4 font-thin pt-2">House No# 425, Road No# 30, New DOHS,</p>
        <p className="font-thin pt-2" >Mohakhali, Dhaka-1206,Bangladesh.</p>
      </div>
      <div className="contact-footer-phone">
        <h1 className="text-3xl">Hotline</h1>
        <p className="mt-4 font-thin pt-2">+88 02 48810365</p>
        <p className="font-thin pt-2">+88 02-48810364</p>
      </div>
      <div className="contact-footer-service flex flex-col">
        <h1 className="text-3xl">Our Services</h1>
        <a className="font-thin hover:underline pt-4" href="www.pegion.com">
          International
        </a>
        <a className="font-thin hover:underline pt-2" href="www.pegion.com">
          Domestic
        </a>
        <a className="font-thin hover:underline pt-2" href="www.pegion.com">
          Transport
        </a>
        <a className="font-thin hover:underline pt-2" href="www.pegion.com">
          International
        </a>
        <a className="font-thin hover:underline pt-2" href="www.pegion.com">
          International
        </a>
      </div>
      <div className="contact-footer-network flex flex-col">
        <h1 className="text-3xl">Our Network</h1>
        <a className="font-thin hover:underline pt-4" href="www.pegion.com">
          Africa
        </a>
        <a className="font-thin hover:underline pt-2" href="www.pegion.com">
          Asia
        </a>
        <a className="font-thin hover:underline pt-2" href="www.pegion.com">
          Carribean
        </a>
        <a className="font-thin hover:underline pt-2" href="www.pegion.com">
          Europe
        </a>
        <a className="font-thin hover:underline pt-2" href="www.pegion.com">
          France
        </a>
        <a className="font-thin hover:underline pt-2" href="www.pegion.com">
          Middle East
        </a>
      </div>
    </div>
  );
};

export default ContactFooter;
