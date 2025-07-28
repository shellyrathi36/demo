import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  const onClick = () => {
    window.open(
      "https://drive.google.com/file/d/1JoqqPJp8PmGVapXH2ZU0B4rf6EGbSk_i/view?usp=drive_link",
      "_blank"
    );
  };
  return (
    <div id="home" className="hero">
      <img
        src={profile_img}
        alt="Profile Picture"
        width={200}
        style={{ borderRadius: "50%", objectFit: "cover", height: "200px" }}
      ></img>
      <h1>
        <span>I’m Shelly Rathi</span>, Frontend Developer based in India.
      </h1>
      <p>
        A deeply enthusiastic and focused B.Tech student at NIT Jalandhar,
        pursuing Instrumentation and Control Engineering with an unwavering
        passion for technology and problem-solving."
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div onClick={onClick} className="hero-resume">
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
