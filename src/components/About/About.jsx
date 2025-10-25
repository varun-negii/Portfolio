import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
// import profile_img from "../../assets/about_profile.svg";
import profile_pic from "./img/profile_pic.jpg";

import React from "react";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_pic} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              As a Full Stack Developer, I specialize in the MERN stack —
              MongoDB, Express.js, React, and Node.js — to build scalable,
              high-performance web applications.
            </p>
            <p>
              I’m driven by a passion for clean code, efficient architecture,
              and intuitive user interfaces. From developing APIs to optimizing
              front-end performance, I aim to deliver solutions that are fast,
              secure, and reliable.
            </p>
            <p>
              Currently, I’m focused on enhancing my cloud and DevOps skills to
              take my full-stack development expertise to the next level.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Node Js</p> <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="about-achievments">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Years of Exprence</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Years of Exprence</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Years of Exprence</p>
        </div>
        <hr />
      </div> */}
    </div>
  );
};

export default About;
