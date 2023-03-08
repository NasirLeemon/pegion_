import React from 'react'
import {IoCallSharp} from 'react-icons/io5'
import {MdEmail} from 'react-icons/md'

const CallButton = () => {

    let circleClasses = "bg-red rounded-full";

  return (
    <div>
        <div style={{backgroundColor : '#053e6c' , color: '#fff'}} className='allContacts fixed px-4 right-0 bottom-[40vh] lg:bottom-[40vh]  lg:right-0    py-5 rounded-md bg-white flex flex-col justify-center items-center gap-4'>
            <div className='bg-coral'>
            <IoCallSharp size={36} color='' className={circleClasses}/>
            </div>
            <div>
            <MdEmail size={36} color='' className={circleClasses} />
            </div>
        </div>
    </div>
  )
}

export default CallButton