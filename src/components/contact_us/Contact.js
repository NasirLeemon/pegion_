import React from 'react'
import './contact.css'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {FaHandshake} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import {AiFillYoutube} from 'react-icons/ai'

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
                <hr color='black'/>
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
        <div className='contact-footer wrapper'>
            <div className='contact-footer-logo'>
                <img src='/images/logo/cropped-PIGION-2020-1-2021.png' alt=''/>
                <div className='contact-us'>
                    <div className='contact-us-icon'>
                        <BsFillChatDotsFill size={30}/>
                        <div>
                            Contact Us
                        </div>
                    </div>
                    <div className='contact-us-icon'>
                        <FaHandshake size={34}/>  
                        <div>
                            Careers
                        </div>
                    </div>
                </div>
                <div className='flex gap-3 pb-4'>
                    <BsFacebook size={24}/>
                    <AiFillTwitterCircle size={24}/>
                    <AiFillYoutube size={24}/>
                    <FaLinkedinIn size={24}/>
                </div>
            </div>
            <div className='contact-footer-service pt-8 flex flex-col'>
                <h1 className='text-3xl'>Our Services</h1>
                <a className='font-thin hover:underline pt-2'  href='www.pegion.com'>International</a>
                <a className='font-thin hover:underline pt-2'  href='www.pegion.com'>Domestic</a>
                <a className='font-thin hover:underline pt-2'  href='www.pegion.com'>Transport</a>
                <a  className='font-thin hover:underline pt-2' href='www.pegion.com'>International</a>
                <a  className='font-thin hover:underline pt-2' href='www.pegion.com'>International</a>
            </div>
            <div className='contact-footer-network pt-8 flex flex-col'>
                <h1 className='text-3xl'>Our Network</h1>
                <a className='font-thin hover:underline pt-2' href='www.pegion.com'>Africa</a>
                <a className='font-thin hover:underline pt-2' href='www.pegion.com'>Asia</a>
                <a className='font-thin hover:underline pt-2' href='www.pegion.com'>Carribean</a>
                <a className='font-thin hover:underline pt-2' href='www.pegion.com'>Europe</a>
                <a className='font-thin hover:underline pt-2' href='www.pegion.com'>France</a>
                <a className='font-thin hover:underline pt-2' href='www.pegion.com'>Middle East</a>
            </div>
        </div>
        <div className='contact-footer-copywrite h-[300px] py-10 px-6 flex flex-col gap-3 bg-gray-900 text-white font-thin'>
            <h4 className='text-sm'>Copywrite Pigeon @2023</h4>
            <h4>Terms of Use</h4>
            <h4>Privacy Policy</h4>
        </div>
    </div>
  )
}

export default Contact