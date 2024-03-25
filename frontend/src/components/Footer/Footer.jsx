import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <Link to='/' className='logo-text'>LaCite Eats</Link>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>PAGES</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-000-000-0000</li>
                <li>contact@LaCiteEats.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright <span className="footer-span">[Janv 2024 - Mars 2024]</span> &copy;LaCiteEats.com - All Right Reserved.</p>
      <p className="footer-copyright">&copy;Developped by Franck | Abdellah | Oumar</p>
    </div>
  )
}

export default Footer
