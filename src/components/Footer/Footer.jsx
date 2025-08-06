import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-about">
          <h3>Bhasaka Technologies</h3>
          <p>
            We are committed to building smart digital experiences using AEM and modern frontend technologies.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: katkamvamshi@gmail.com</p>
          <p>Phone: +91 888666 9589</p>
          <p>Location: Hyderabad, Telangana, India</p>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><img src="/icons/facebook.svg" alt="Facebook" /></a>
            <a href="#"><img src="/icons/twitter.svg" alt="Twitter" /></a>
            <a href="#"><img src="/icons/linkedin.svg" alt="LinkedIn" /></a>
            <a href="#"><img src="/icons/instagram.svg" alt="Instagram" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Bhasaka Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
