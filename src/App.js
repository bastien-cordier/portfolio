import React from "react";
import "./App.scss";

import Navbar from "./components/navbar.js";
import Intro from "./containers/home.js";
import AboutMe from "./containers/aboutMe.js";
import Projects from "./containers/projects.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
