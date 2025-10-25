import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile_pic from "./img/profile_pic.jpg";

// import profile_img from "../../assets/profile_img.svg";

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
        <div className="hero-connect">
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me{" "}
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
