import React, { useEffect, useState } from 'react'
import './contact.css'
import ContactFooter from '../contact_footer/ContactFooter'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import emailjs  from '@emailjs/browser';
import { motion } from 'framer-motion'

const Contact = () => {
    const [showAlert, setShowAlert] = useState(false);
    const form = useRef()
    const [message, setMessage] = useState({
       name: '',
       email: '',
       phone: '',
       country: '',
       message : ''
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
        process.env.REACT_APP_TEMPLATE_ID, form.current, 
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
    <motion.div className='contact-container'
    
    initial={{width : 0}}
    animate={{width : "100%"}}
    exit={{x : window.innerWidth , transition : {duration : 0.4}}}
    >
        <div className='contact-header wrapper relative'>
            <div className='contact-header-image'>
                <img src='/images/contact/enquire.jpg' alt='' />
            </div>
            <div className='contact-header-text '>
                <h1>General Enquires</h1>
                <h4>Please complete the form below to contact us.
An AGS expert will get in touch with you shortly.</h4>
                <hr />
            </div>
        </div>
        <div className='contact-body wrapper'>
            <div className='contact-body-text lg:px-12 lg:pt-5'>
                <h2>Would you like a quotation?</h2>
                <h4>Please provide more details of your move by <Link to='/qoute' className='text-red-700 underline'>clicking here.</Link> </h4>
            </div>
            
            <form ref={form} onSubmit={sendEmail}>
            <div className='contact-body-input lg:flex lg:justify-center lg:items-center lg:gap-6'>

            <div className='contact-body-input-left'>
                <h1>Your Details</h1>
                    <input required placeholder='Name...' name='user_name' type='text' onChange={handleChange} />
                    <input required name='user_email' placeholder='Email...' type='text' onClick={handleChange} />
                    <input required name='phone' placeholder='Phone...' type='text' onClick={handleChange} />
                    <input required name='country' placeholder='Country...' type='text' onClick={handleChange} />
            </div>
            <div className='contact-body-input-right'>
           
                    <h1>Message</h1>
                    <textarea required name='message' placeholder='Write Here...' rows={4} cols={50} onClick={handleChange}>

                    </textarea>
                    {showAlert && (
        <div style={{ backgroundColor: "#053e6c", color: "white", padding: "10px", display:'block' }}>
          Email sent successfully!
        </div>
      )}
                    <input type='submit' value='Send' />
              
            </div>
            </div>
            </form>
           
        </div>
        
        <ContactFooter />
        <div className='contact-footer-copywrite h-[300px] py-10 px-6 flex flex-col gap-3 bg-gray-900 text-white font-thin'>
            <h4 className='text-sm'>Copywrite Pigeon @2023</h4>
            <h4>Terms of Use</h4>
            <h4>Privacy Policy</h4>
        </div>
    </motion.div>
  )
}

export default Contact