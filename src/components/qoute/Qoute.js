import React from "react";
import "./qoute.css";
import { useRef } from 'react'
import emailjs  from '@emailjs/browser';


const Qoute = () => {
    const form = useRef()
    


    const sendEmail = (e) => {
        e.preventDefault()

           
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()

    }



  return (
    <div className="qoute-container">
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
              <div>
                
                <label>Name</label>
                <input placeholder="" name='user_name' type="text" />
                <label>Point Of Loading</label>
                <input placeholder="" type="text" />
                <label>Commodities</label>
                <input type="text" />
                <label>CBM (Cubic Meter) </label>
                <input placeholder="" type="text" />
              </div>
              <div>
                <label>Email</label>
                <input placeholder="" type="text" name='user_email' />
                <label>Point of Destination</label>
                <input type="text" />
                <label>Volume Weight</label>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="qoute-body-input-right">
            <div className="lg:mt-20">
              <label>Inquiries</label>
              <textarea
                name="message"
                placeholder="Write Here..."
                rows={5}
                cols={3}
                
              ></textarea>
              <input type="submit" value="Send" />
            </div>
          </div>
        </div>
        </form>
        <div></div>
      </div>
    </div>
  );
};

export default Qoute;
