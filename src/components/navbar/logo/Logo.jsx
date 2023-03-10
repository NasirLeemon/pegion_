import React from 'react'
import { Link } from 'react-router-dom'
import './logo.css'

const Logo = () => {
  return (
    <Link to='/'>
    <div className='logo-wrapper'>
        <img className='companyLogo' src="images/logo/cropped-PIGION-2020-1-2021.png" alt="Pigeon Logistics" />
    </div>
    </Link>
  )
}

export default Logo