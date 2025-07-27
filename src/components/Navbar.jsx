import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../assets/Logo.png";
import underline from "../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../assets/menu_open.svg";
import menu_close from "../assets/menu_close.svg";
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <img
        src={Logo}
        style={{ borderRadius: "50%", objectFit: "cover", height: "80px" }}
      ></img>
      <img src={menu_open} alt="menu_open"></img>
      <ul className="nav-menu">
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Work</p>
          </AnchorLink>
          {menu === "work" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            {" "}
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>

          {menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        {" "}
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          {" "}
          Contact with Me{" "}
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
