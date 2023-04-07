import React, { useEffect, useState } from "react";
import "./qoute.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Qoute = () => {
  const [showAlert, setShowAlert] = useState(false);
    const form = useRef()
    const [message, setMessage] = useState({
      user_name: '',
       user_email : '',
       phone : '',
       country: '',
       message : '',
       POL: '',
       commodities: '',
       CBM: '',
       POD: '',
       VWeight: '',
    }); 

    useEffect(() => {
        if (showAlert) {
          // reload page after 3 seconds
          setTimeout(() => {
            setShowAlert(false)
          }, 1000);
        }
      }, [showAlert]);
    
    const handleChange = (e) => {

        setMessage({
            ...message,
            [e.target.name] : e.target.value
        })
    }


    const sendEmail = (e) => {
        e.preventDefault()

           
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, 
        process.env.REACT_APP_QOUTE_TEMPLATE_ID, form.current, 
        process.env.REACT_APP_PUBLIC_KEY)
    .then((result) => {
        setShowAlert(true);
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()

    }

  return (
    <motion.div
      className="qoute-container"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
    >
      <div className="qoute-header wrapper relative">
        <div className="qoute-header-image">
          <img src="/images/qoute/qoute.jpg" alt="" />
        </div>
        <div className="qoute-header-text ">
          <h1>Get Qoute</h1>
        </div>
      </div>
      <div className="qoute-body wrapper">
        <form ref={form} onSubmit={sendEmail}>
          <div className="qoute-body-input lg:flex lg:justify-center lg:items-center lg:gap-6">
            <div className="qoute-body-input-left">
              <h1>Details</h1>
              <div className="flex flex-col lg:flex-row lg:gap-5 lg:mt-5">
                <div className="lg:w-[50%]">
                  <label>Name</label>
                  <input onChange={handleChange} required name="user_name" type="text" />
                  <label>Point Of Loading</label>
                  <input onChange={handleChange}  name="POL" placeholder="" type="text" />
                  <label>Commodities</label>
                  <input onChange={handleChange}  name="commodities" type="text" />
                  <label>CBM (Cubic Meter) </label>
                  <input onChange={handleChange}  name='CBM' placeholder="" type="text" />
                </div>
                <div className="lg:w-[50%]">
                  <label>Email</label>
                  <input onChange={handleChange} required placeholder="" type="text" name="user_email" />
                  <label>Point of Destination</label>
                  <input onChange={handleChange}  name="POD" type="text" />
                  <label>Volume Weight</label>
                  <input onChange={handleChange}  name="VWeight" type="text" />
                  <label>Phone</label>
                  <input onChange={handleChange} required  name="phone" type="text" />
                </div>
              </div>
            </div>
            <div className="qoute-body-input-right">
              <div className="lg:mt-[5rem]">
                <label>Inquiries</label>
                <textarea onChange={handleChange}  name="message" placeholder="Write Here..."></textarea>
                {showAlert && (
        <div style={{ backgroundColor: "#053e6c", color: "white", padding: "10px", display:'block' }}>
          Email sent successfully!
        </div>
      )}
                <input type="submit" value='Send' />
              </div>
            </div>
          </div>
        </form>
        <div></div>
      </div>
    </motion.div>
  );
};

export default Qoute;
