import React, { Component } from "react";
import WOW from "wowjs";

class TopSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  render() {
    return (
      <div className="name-uvp-section wow fadeIn" data-wow-delay="0.35s">
        <div className="top-section">
          <h1 className="name-block-intro">Hello, I'm Christian Allen</h1>
          <p className="name-block-sub">A UX-Oriented Web Developer</p>
        </div>
      </div>
    );
  }
}

export default TopSection;
