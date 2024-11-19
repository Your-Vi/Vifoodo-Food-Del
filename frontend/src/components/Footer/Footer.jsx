import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
              <img className='end' src={assets.logo} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda totam recusandae qui velit tenetur blanditiis voluptas delectus nulla veritatis laboriosam. Molestiae ipsam saepe qui error expedita impedit aperiam facere explicabo.</p>
              <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
              </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-6383788915</li>
                    <li>vifoodo77@gmail.com</li>
                </ul>

            </div>
        </div>
        <hr />
        <p className="footer-copyright">
        Copyright 2024 © vifoodo.com - All Right Reserved.
        </p>

    </div>
  )
}

export default Footer