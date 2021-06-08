import React, { Fragment } from "react";
import "./Script";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./Components/Header/header";
import Accueil from "./Components/Accueil/accueil";
import About from "./Components/Apropos/about";
import Formation from "./Components/Formation/formation";
import Parcours from "./Components/Parcours/parcours";
import Skills from "./Components/Skills/skills";

function App() {
  return (
    <Fragment>
      <Accueil />
      <About />
      <Formation />
      <Parcours />
      <Skills />
    </Fragment>
  );
}

export default App;
