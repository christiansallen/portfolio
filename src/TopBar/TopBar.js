import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faGithub);

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-items">
        <div className="top-bar-left">
          <p className="top-bar-logo">CA</p>
        </div>
        <div className="top-bar-middle">
          <div className="icons">
            <a
              href="https://github.com/christiansallen"
              target="_blank"
              className="top-bar-icon-a"
            >
              <FontAwesomeIcon
                style={{
                  fontSize: "30px"
                }}
                icon={["fab", "github"]}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/christian-allen-/"
              target="_blank"
              className="top-bar-icon-a"
            >
              <FontAwesomeIcon
                style={{
                  fontSize: "30px"
                }}
                icon={["fab", "linkedin"]}
              />
            </a>
          </div>
        </div>
        <div className="top-bar-right">
          <a className="top-bar-email" href="mailto:christiansallen@gmail.com">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
