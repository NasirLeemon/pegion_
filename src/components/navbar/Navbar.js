import React, { useState } from 'react'
import Logo from './logo/Logo'
import { NavLink } from 'react-router-dom'
import './navBar.css'
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {

  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className='navBar'>
      <div className='navContainer'>
        <div className='logo'>
            <Logo />
        </div>
        <div className="navMenu-icon" onClick={handleShowNavbar}>
          <GiHamburgerMenu size={30}/>
        </div>
        <div className={`navElement ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/career">Career</NavLink></li>
            <li><NavLink to="/quote">Get Quote</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar