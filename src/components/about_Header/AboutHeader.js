import React from "react";
import "./aboutHeader.css";
import { Link, Outlet } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const AboutHeader = () => {
  return (
    <>
      <div className="about-header-container">
        <div className="about_header_text">
          <h1>LOGISTICS AND SUPPLY</h1>
          <h3>
          With meticulously chosen carriers, we provide scheduled service on the world's major air routes so you can plan with confidence and become more efficient. We provide a variety of highly flexible packages so you can choose delivery speeds that best suit your needs.
          </h3>
        </div>
        <div className="about_header_image grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2 md:gap-4 lg:gap-6">
          <div className="image_container">
            <div className="image-wrapper-text">
              <h2>ASSOCIATION</h2>
              <Link to='company'>
              <button>
                Learn More{" "}
                <span>
                  {" "}
                  <BsArrowRight />{" "}
                </span>
              </button>
              </Link>
            </div>
            <div>
              <img src="/images/aboutHeader/building.jpg" alt="" />
            </div>
          </div>
          <div className="image_container">
            <div className="image-wrapper-text">
              <h2>Philosophy</h2>
              <Link to='company'>
              <button>
                Learn More{" "}
                <span>
                  {" "}
                  <BsArrowRight />{" "}
                </span>
              </button>
              </Link>
            </div>
            <div>
              <img src="/images/aboutHeader/culture.jpg" alt="" />
            </div>
          </div>
          <div className="image_container">
            <div className="image-wrapper-text">
              <h2>Career</h2>
              <Link to='company'>
              <button>
                Learn More{" "}
                <span>
                  {" "}
                  <BsArrowRight />{" "}
                </span>
              </button>
              </Link>
            </div>
            <div>
              <img src="/images/aboutHeader/career.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default AboutHeader;
