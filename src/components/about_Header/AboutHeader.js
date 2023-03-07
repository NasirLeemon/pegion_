
import React from "react";
import './aboutHeader.css'
import { Outlet } from "react-router-dom";

const AboutHeader = () => {
    
    return (
      <>
    <div className="about-header-container">
      <div className="about_header_text">
        <h1>LOGISTICS AND SUPPLY</h1>
        <h3>
          OUR INNOVATIVE, DYNAMIC AND PASSIONATE LEADERS FORM THE DRIVING FORCE
          OF THE GROUP GIVE YOU CUSTOMIZED, FLEXIBLE, END-TO-END SOLUTIONS THAT
          MAKE BETTER USE OF YOUR TIME AND MONEY.
        </h3>
      </div>
      <div className="about_header_image grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
        <div className="about-header-image">
          <div>ASSOCIATION</div>
          <div><img src="/images/aboutHeader/building.jpg" alt="" /></div>
        </div>
        <div className="about-header-image">
          <div>tradition</div>
          <div><img src="/images/aboutHeader/culture.jpg" alt="" /></div>
        </div>
        <div className="about-header-image">
          <div>Career</div>
          <div><img src="/images/aboutHeader/career.jpg" alt="" /></div>
        </div>
      </div>
    </div>
    <Outlet />
    </>
  );
};

export default AboutHeader;
