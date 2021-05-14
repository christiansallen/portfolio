import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faGithub);

const BottomBar = () => {
  return (
    <div className="bottom-bar">
      <div className="bottom-bar-items">
        <div className="bottom-bar-left">
          <p className="bottom-bar-logo">2021 © Christian Allen</p>
        </div>
        <div className="bottom-bar-middle">
          <div className="icons">
            <a
              href="https://github.com/christiansallen"
              target="_blank"
              className="bottom-bar-icon-a"
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
              className="bottom-bar-icon-a"
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
        <div className="bottom-bar-right">
          <a
            className="bottom-bar-email"
            href="mailto:christiansallen@gmail.com"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
