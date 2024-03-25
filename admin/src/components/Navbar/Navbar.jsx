import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        <span className='logo' alt="" >LaCite Eats</span>
        <p>Admin panel</p>
      </div>
      <div className='profile' src={assets.profile_image} ></div>
    </div>
  )
}

export default Navbar
