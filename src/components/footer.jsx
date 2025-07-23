import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p>&copy; 2023 Movie App. All rights reserved.</p>
        <ul className="footer-nav">
          <li><a href="about.jsx">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>

      <div className="social-media">
        <a href="https://www.facebook.com/kirk.howard.549" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://x.com/Kirk11151019" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://wa.me/233503359334" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
          <FaWhatsapp />
        </a>
        <a href="https://www.instagram.com/bellamy_blake111/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/kirk-rosavet-36b665299/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
      </div>

      <div className="footer-info">
        <p>Developed by <strong>KayTECH Ind</strong></p>
      </div>

      <div className="footer-links">
        <a href="#">About Us</a>
        <a href="#">Careers</a>
        <a href="#">Help Center</a>
        <a href="#">Feedback</a>
      </div>

      <div className="footer-contact">
        <p>Contact us at: <a href="+233 50 335 9334">+233 50 335 9334</a></p>
      </div>
    </footer>
  );
}

export default Footer;
