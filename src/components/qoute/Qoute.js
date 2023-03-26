import React from 'react'
import './qoute.css'
const Qoute = () => {
  return (
    <div className='qoute-container'>
    <div className='qoute-header wrapper relative'>
        <div className='qoute-header-image'>
            <img src='/images/qoute/qoute.jpg' alt='' />
        </div>
        <div className='qoute-header-text '>
                <h1>Get Qoute</h1>
            </div>
    </div>
    <div className='qoute-body wrapper'>
        <div className='qoute-body-input lg:flex lg:justify-center lg:items-center lg:gap-6'>
        <div className='qoute-body-input-left'>
            <h1>Details</h1>
            <form className='flex flex-col lg:flex-row lg:gap-5 lg:mt-5'>
                <div>
                <label >Email</label>
                <input placeholder='' type='text' />
                <label >Point Of Loading</label>
                <input placeholder='' type='text' />
                <label >Point of Destination</label>
                <input placeholder='' type='text' />
                </div>
                <div>
                <label >Commodities</label>
                <input  type='text' />
                <label >Volume Weight</label>
                <input  type='text' />
                <label >CBM (Cubic Meter) </label>
                <input  type='text' />
                </div>

            </form>
        </div>
        <div className='qoute-body-input-right'>
            <form className='lg:mt-20'>
                <label>Inquiries</label>
                    <textarea  name='message' placeholder='Write Here...' rows={4} cols={50}>
                    </textarea>
                    <input type='submit' value='Send' />
                </form>
            </div>
        </div>
        <div>
        </div>
    </div>
</div>
  )
}

export default Qoute