import React from "react";

import profile from "./../images/profile2.png";
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
            I am currently a software engineer at Rock Solid Internet Systems. I have experience in languages and libraries such as: HTML,
            CSS, Javascript, React, Redux, PHP, Node.js, Express, MySQL, and
            Firebase.
          </p>

          <p>
            If your company is looking for a software engineer with the
            languages and libraries I've listed above, please feel free to
            contact me at:{" "}
            <a className="inline-email" href="mailto:christiansallen@gmail.com">
              christiansallen@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
