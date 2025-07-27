import React from "react";
import "./Footer.css";
import Logo from "../../assets/Logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img
            src={Logo}
            style={{ borderRadius: "50%", objectFit: "cover", height: "80px" }}
            alt="logo"
          ></img>
          <p>
            A deeply enthusiastic and focused B.Tech student at NIT Jalandhar,
            pursuing Instrumentation and Control Engineering with an unwavering
            passion for technology and problem-solving."
          </p>
        </div>
      </div>
      <div className="footer-bottom bordered">
        <p className="footer-bottom-right">
          © 2025 Shelly Rathi. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
