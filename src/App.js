import React, { Fragment } from "react";
import "./Script";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/header";
import Accueil from "./Components/Accueil/accueil";
import About from "./Components/Apropos/about";
import Formation from "./Components/Formation/formation";
import Parcours from "./Components/Parcours/parcours";

function App() {
  return (
    <Fragment>
      <Header />
      <Accueil />
      <About />
      <Formation />
      <Parcours />
    </Fragment>
  );
}

export default App;
