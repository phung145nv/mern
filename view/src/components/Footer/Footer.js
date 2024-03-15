import React from 'react'
import "./Footer.css"
import logo from "./../../assets/logo.png"
import instagram_icon from "./../../assets/instagram_icon.png"
import whatsapp_icon from "./../../assets/whatsapp_icon.png"
import pintester_icon from "./../../assets/pintester_icon.png"
import "./Footer.css"

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className="footer-logo">
          <img src={logo} alt="" />
          <span>SHOPPER</span>
        </div>
        <ul className="footer-link">
          <li><a href="">Company</a></li>
          <li><a href="">Products</a></li>
          <li><a href="">Offices</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>
        <div className="footer-social-media">
          <img src={instagram_icon} alt="" />
          <img src={whatsapp_icon} alt="" />
          <img src={pintester_icon} alt="" />
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright @ 2023 - All Right Reserved</p>
    </div>
  );
}

export default Footer
