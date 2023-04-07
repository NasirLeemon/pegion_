import React, { useState } from 'react'
import Logo from './logo/Logo'
import { NavLink } from 'react-router-dom'
import './navBar.css'
import { GiHamburgerMenu, GiCrossMark } from "react-icons/gi";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const handleLinkClick = () => {
    setShowNavbar(false)
  }

  return (
    <nav className='navBar'>
      <div className='navContainer'>
        <div className='logo'>
            <Logo />
        </div>
        <div className="navMenu-icon" onClick={handleShowNavbar}>
          {showNavbar ? (
            <GiCrossMark size={30}/>
          ) : (
            <GiHamburgerMenu size={30}/>
          )}
        </div>
        <div className={`navElement ${showNavbar && 'active'}`}>
          <ul>
            <li className='growth'>
              <NavLink to="/" onClick={handleLinkClick}>Home</NavLink>
            </li>
            <li className='growth'>
              <NavLink to="/about" onClick={handleLinkClick}>About Us</NavLink>
            </li>
            <li className='growth'>
              <NavLink to="/services" onClick={handleLinkClick}>Services</NavLink>
            </li>
          
            <li className='growth'>
              <NavLink to="/quote" onClick={handleLinkClick}>Get Quote</NavLink>
            </li>
            <li className='growth'>
              <NavLink to="/contact" onClick={handleLinkClick}>Contact</NavLink>
            </li>
            <li className='growth'>
              <NavLink to="/career" onClick={handleLinkClick}>Career</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
