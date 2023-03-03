import React from 'react'
import videoBg from '../../assets/videoBg.mp4'
import './home.css'
import { NavLink } from 'react-router-dom'
const Home = () => {
  return (
    <div className='mainVideo'>
        <div className='overLay'>

        </div>
        <video src={videoBg} autoPlay loop muted />
        <div className='content'>
        <h1 className='text-7xl '>Pigeon Logistics</h1>
        <h3 className='text-3xl'>Your Trusted Forwarder</h3>
        <button  className='bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          <NavLink to='/about'>
            See More
            </NavLink>
        </button>
        </div>
    </div>
  )
}

export default Home