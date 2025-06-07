import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>SILENTIFY</h3>
          <p>Maldybaeva Street<br />Bishkek, Kyrgyzstan</p>
          <p>
            <strong>Phone:</strong> +996 504 14 89 14<br />
            <strong>Email:</strong> nursquad
          </p>
          <div className="social-icons">
            <a href="#!">Facebook</a>
            <a href="#!">Instagram</a>
            <a href="#!">LinkedIn</a>
          </div>
        </div>

        <div className="footer-section">
          <div className="useful_part">
            <h4>Useful Links</h4>
            <a href="./Main">Home</a>
            <a href="./About">About </a>
            <a href="./Call">Call</a>
            <a href="./Azbuka">Study</a>
            <a href="./Privacy">Privacy policy</a>
           
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; Copyright <strong>Numberones</strong>. All Rights Reserved<br />
          Designed by <a href="https://">Nurti's team</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;