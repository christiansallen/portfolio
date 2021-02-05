import React, { Component } from "react"; 
import "./css/App.css";
import TopSection from "./TopSection/TopSection";
import MiddleSection1 from "./MiddleSection/MiddleSection1";
import TopBar from "./TopBar/TopBar.js";
import BottomSection from "./BottomSection/BottomSection.js";
import AboutMe from "./AboutMe/AboutMe.js";

class App extends Component {
  render() {
    return (
      <div className="app-background">
        <div className="App">
          <TopBar />
          <TopSection />
          <MiddleSection1 />
          <AboutMe />
          <BottomSection />
        </div>
      </div>
    );
  }
}

export default App;
