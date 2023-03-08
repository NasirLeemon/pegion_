import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='contact-container'>
        <div className='contact-header wrapper'>
            <div className='contact-header-image'>
                <img src='/images/contact/enquire.avif' alt='' />
            </div>
            <div className='contact-header-text '>
                <h1>General Enquires</h1>
                <h4>Please complete the form below to contact us.
An AGS expert will get in touch with you shortly.</h4>
                <hr color='black'/>
            </div>
        </div>
        <div className='contact-body wrapper'>
            <div className='contact-body-text'>
                <h2>Would you like a quotation?</h2>
                <h4>Please provide more details of your move by <a href='www.google.com' className='text-red-700 underline'>clicking here.</a></h4>
            </div>
            <div className='contact-body-input'>
            <div className='contact-body-input-left'>
                <h1>Your Details</h1>
                <form>
                    <input placeholder='First Name*' type='text' />
                    <input placeholder='Email*' type='text' />
                    <input placeholder='Phone*' type='text' />
                </form>
            </div>
            <div className='contact-body-input-right'>
            <form>
                    <label for="message">
                        Your Message
                    </label>
                    <textarea name='message' rows={4} cols={50}>

                    </textarea>
                    <input type='submit' value='Submit' />
                </form>
            </div>
            </div>
        </div>
        <div className='contact-footer wrapper'></div>
    </div>
  )
}

export default Contact