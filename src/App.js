import React, { Fragment } from "react";
import "./Script";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/header";
import Accueil from "./Components/Accueil/accueil";
import About from "./Components/Apropos/about";

function App() {
  return (
    <Fragment>
      <Header />
      <Accueil />
      <About />
    </Fragment>
  );
}

export default App;
