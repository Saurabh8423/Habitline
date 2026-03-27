import React from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left Section */}
        <div className="footer-left">
          <div className="logo">
            <span className="logo-icon">⊖</span>
            <span className="logo-text">Habitline</span>
          </div>

          <h3 className="footer-heading">Stay on top of your habits</h3>
          <p className="footer-subtext">
            No spam. Just simple advice for staying consistent.
          </p>
        </div>

        {/* Right Section */}
        <div className="footer-links">
          
          <div className="footer-column">
            <h4>Quick links</h4>
            <a href="#">Features</a>
            <a href="#">Use Cases</a>
            <a href="#">Social proof</a>
            <a href="#">Numbers</a>
            <a href="#">Ai Suggestions</a>
          </div>

          <div className="footer-column">
            <h4>Pages</h4>
            <a href="#">About</a>
            <a href="#">Waitlist</a>
            <a href="#">Changelog</a>
            <a href="#">Error 404</a>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <a href="#">FAQs</a>
            <a href="#">Contact</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & condition</a>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>Designed by Saurabh</p>

         <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;