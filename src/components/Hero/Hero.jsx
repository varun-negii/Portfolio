import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile_pic from "./img/profile_pic.jpg";

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <img src={profile_pic} alt="" className="profile_img" />
      <h1>
        <span>I'm Varun Negi,</span> Full Stack developer based in INDIA.
      </h1>
      <p>
        I specialize in building modern, responsive web applications using the
        latest technologies. Passionate about turning ideas into functional,
        user-friendly digital experiences.
      </p>

      <div className="hero-action">
        {/* Connect Button */}
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>

        {/* Resume Download Button */}
        <div className="hero-resume">
          <a
            href="Varun_Negi_CV (2).pdf"
            download="Varun_Negi_CV (2).pdf"
            className="resume-btn"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
