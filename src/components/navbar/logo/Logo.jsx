import React from 'react'
import { Link } from 'react-router-dom'
import './logo.css'

const Logo = () => {
  return (
    <Link to='/'>
    <div className='logo-wrapper'>
        <img className='companyLogo' src="/images/logo/LOGO.png" alt="Pigeon Logistics" />
    </div>
    </Link>
  )
}

export default Logo