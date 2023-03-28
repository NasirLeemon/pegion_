import React from "react";
import "./aboutHeader.css";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Overview from "../overView/Overview";
import { motion } from "framer-motion";

const AboutHeader = () => {
  return (
    <>
      <motion.div
        className="about-header-container"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
      >
        <div className="about_header_text">
          <h1>LOGISTICS AND SUPPLY</h1>
          <h3>
            With meticulously chosen carriers, we provide scheduled service on
            the world's major air routes so you can plan with confidence and
            become more efficient. We provide a variety of highly flexible
            packages so you can choose delivery speeds that best suit your
            needs.
          </h3>
        </div>
        <div className="about_header_image grid grid-cols-1 gap-2 lg:grid-cols-3 lg:place-items-center">
          <motion.div className="image_container"
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{
             duration: 0.3,
             ease: [0, 0.71, 0.2, 1.01],
             scale: {
               type: "spring",
               damping: 7,
              stiffness: 100,
               restDelta: 0.002
             }
           }}
          
          >
            <Link to="/company">
              <div className="overlayed h-full w-full absolute"></div>
              <div className="image-wrapper-text growth ">
                <h2>ASSOCIATION</h2>
                <button>
                  Learn More{" "}
                  <span>
                    {" "}
                    <BsArrowRight />{" "}
                  </span>
                </button>
              </div>
              <div>
                <img src="/images/aboutHeader/building.jpg" alt="" />
              </div>
            </Link>
          </motion.div>
          <motion.div className="image_container"
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{
             duration: 0.3,
             ease: [0, 0.71, 0.2, 1.01],
             scale: {
               type: "spring",
               damping: 7,
              stiffness: 100,
               restDelta: 0.002
             }
           }}
           >
            <Link to="/company">
              <div className="overlayed h-full w-full absolute"></div>
              <div className="image-wrapper-text growth">
                <h2>Philosophy</h2>

                <button>
                  Learn More{" "}
                  <span>
                    {" "}
                    <BsArrowRight />{" "}
                  </span>
                </button>
              </div>
              <div>
                <img src="/images/aboutHeader/culture.jpg" alt="" />
              </div>
            </Link>
          </motion.div>
          <motion.div className="image_container"
          
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 7,
              stiffness: 100,
              restDelta: 0.002
            }
          }}
          
          >
            <Link to="/company">
              <div className="overlayed h-full w-full absolute"></div>
              <div className="image-wrapper-text growth">
                <h2>Career</h2>
                <button>
                  Learn More{" "}
                  <span>
                    {" "}
                    <BsArrowRight />{" "}
                  </span>
                </button>
              </div>
              <div>
                <img src="/images/aboutHeader/career.jpg" alt="" />
              </div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
      <Overview />
    </>
  );
};

export default AboutHeader;
