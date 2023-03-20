import React from 'react'
import './contact.css'
import ContactFooter from '../contact_footer/ContactFooter'

const Contact = () => {
  return (
    <div className='contact-container'>
        <div className='contact-header wrapper relative'>
            <div className='contact-header-image'>
                <img src='/images/contact/enquire.avif' alt='' />
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
                <h4>Please provide more details of your move by <a href='www.google.com' className='text-red-700 underline'>clicking here.</a></h4>
            </div>
            <div className='contact-body-input lg:flex lg:justify-center lg:items-center lg:gap-6'>
            <div className='contact-body-input-left'>
                <h1>Your Details</h1>
                <form>
                    <input placeholder='Name...' type='text' />
                    <input placeholder='Email...' type='text' />
                    <input placeholder='Phone...' type='text' />
                    <input placeholder='Country...' type='text' />
                </form>
            </div>
            <div className='contact-body-input-right'>
            <form>
                    <h1>Message</h1>
                    <textarea name='message' placeholder='Write Here...' rows={4} cols={50}>

                    </textarea>
                    <input type='submit' value='Send' />
                </form>
            </div>
            </div>
        </div>
        <ContactFooter />
        <div className='contact-footer-copywrite h-[300px] py-10 px-6 flex flex-col gap-3 bg-gray-900 text-white font-thin'>
            <h4 className='text-sm'>Copywrite Pigeon @2023</h4>
            <h4>Terms of Use</h4>
            <h4>Privacy Policy</h4>
        </div>
    </div>
  )
}

export default Contact