// src/components/Footer.js
import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
          Titan has come a long way since 1984 when we started with one product category. Today, with over 8,000 employees and about 38,000 in the overall Titan ecosystem, 16 brands and over 2,000 retail stores, we are as committed  as ever to delivering profitable and responsible growth for all our stakeholders..
          </p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/customer-support">Customer Support</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>
          Titan Company Limited, 
        CIN: L74999TZ1984PLC001456,  
       'INTEGRITY' #193, Veerasandra,<br/>  
       Electronic City PO | Off Hosur Main Road  
       Bengaluru-560100,<br/>
       Karnataka,    
       INDIA.


+91-(0)80-6704 7000
          </p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Subscribe to our newsletter for the latest updates and offers.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Titan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
