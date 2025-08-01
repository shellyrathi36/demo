import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data.js";
import arrow_icon from "../../assets/arrow_icon.svg";
// const handleClick = () => {
//   mywork_data.forEach((project) => {
//     window.open(project.w_link, "_blank");
//   });
// };
const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="theme-pallette"></img>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <img
              key={index}
              src={work.w_img}
              alt=""
              style={{
                objectFit: "cover",
                height: "280px",
                width: "419px",
              }}
              onClick={() => window.open(work.w_link, "_blank")}
            />
          );
        })}
      </div>
      <div
        onClick={() =>
          window.open("https://github.com/shellyrathi36", "_blank")
        }
        className="mywork-showmore"
      >
        <p>Show More</p>
        <img src={arrow_icon} alt="arrow-icon"></img>
      </div>
    </div>
  );
};

export default MyWork;
