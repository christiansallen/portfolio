import React, { Component } from "react";
import Project from "./Project";
import WOW from "wowjs";

import moviesdb from "../images/moviesdb.jpg";
import watermyplants from "../images/watermyplants.jpg";
import projectfirefly from "../images/ProjectFirefly.png";

class MiddleSection1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  projectLink = url => {
    window.location = url;
  };

  render() {
    return (
      <div className="middle-section wow fadeIn" data-wow-delay="0.5s">
        <h2 className="projects-heading">PROJECTS</h2>
        <div className="projects-section">
          <div
            className="tile wow fadeInLeft"
            data-wow-delay="0.9s"
            onClick={() => this.projectLink("https://moviedb19.netlify.com/")}
          >
            <Project
              name="Movies DB"
              type="Front/Back End Development"
              img={moviesdb}
              tech="React, Redux, Javascript, HTML, CSS"
            />
          </div>

          <div
            className="tile wow fadeInLeft"
            data-wow-delay="0.7s"
            onClick={() =>
              this.projectLink("https://projectfirefly-staging.netlify.com/")
            }
          >
            <Project
              name="Project Firefly"
              type="Front/Back End Development"
              img={projectfirefly}
              tech="React Hooks, Firebase, Javascript, HTML, SASS"
            />
          </div>

          <div
            className="tile wow fadeInLeft"
            data-wow-delay="0.5s"
            onClick={() =>
              this.projectLink("https://water-my-plants.netlify.com/login")
            }
          >
            <Project
              name="Water My Plants"
              type="Back End Development"
              img={watermyplants}
              tech="Node.js, Express, PostgreSQL, JEST"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MiddleSection1;
