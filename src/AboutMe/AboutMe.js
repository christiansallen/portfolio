import React from "react";

import profile from "./../images/profile.png";
import "./../css/App.css";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <h2 className="about-me-header">About Me</h2>
      <div className="about-me-content">
        <div className="about-me-profile">
          <img src={profile} alt="profile" className="about-me-img" />
        </div>
        <div className="about-me-text">
          <p>
            I am currently a full-stack web development student at Lambda
            School. I have experience in languages and libraries such as: HTML,
            CSS, Javascript, React/Redux, Hooks, Node.js, Express, SQL,
            Firebase, and Git.
          </p>

          <p>
            I'm currently looking for a software engineering position at a
            company where I can contribute and continue to learn.
          </p>

          <p>
            If your company is looking for a software engineer with the
            languages and libraries I've listed above, please feel free to
            contact me at: christiansallen@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
