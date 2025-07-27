import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.jpg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="theme-pattern"></img>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img
            src={profile_img}
            alt="Profile Picture"
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              height: "400px",
              width: "400px",
            }}
          ></img>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I’m a highly motivated and passionate B.Tech student in
              Instrumentation and Control Engineering at NIT Jalandhar, with a
              strong interest in full-stack development and data science.
            </p>
            <p>
              I’m constantly pushing myself to grow as a developer. One of my
              favorite projects is a movie recommendation system that combines
              collaborative and content-based filtering to personalize user
              experience.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>DSA</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>OOPs</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>OS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h2>5+</h2>
          <p>PROJECTS COMPLETED</p>
        </div>
        <div className="about-achievement ">
          <h2>700+</h2>
          <p>QUESTIONS COMPLETED</p>
        </div>
        <div className="about-achievement">
          <h2>1581+</h2>
          <p>CONTEST RATING</p>
        </div>
      </div>
    </div>
  );
};

export default About;
